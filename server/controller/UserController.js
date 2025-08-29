import User from "../model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";
// OTP generate function
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString(); // 6 digit OTP

// ------------------- Signup -------------------
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // OTP generate
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min valid

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      role: "user",
      isVerified: false,
      otp,
      otpExpiry,
    });
    await sendEmail(
      user.email,
      "Your OTP Code",
      `Hello ${user.firstName},\n\nYour OTP is: ${otp}\n\nIt will expire in 5 minutes.\n\nThank you!`
    )
    console.log("data")
    // TODO: OTP send via email / SMS (abhi just response me bhej raha hu for testing)
    res.status(201).json({ message: "User created, please verify OTP", otp ,email:user.email}); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------- OTP Verify -------------------
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified) return res.status(400).json({ message: "User already verified" });

    if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpiry < Date.now()) return res.status(400).json({ message: "OTP expired" });

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "Account verified successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------- Signin -------------------
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) return res.status(403).json({ message: "Please verify your account first" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // JWT token generate
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role
      },
      token
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
