import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: "user" },

  
  isVerified: { type: Boolean, default: false },   
  otp: { type: String },                           
  otpExpiry: { type: Date },                       
}, { timestamps: true });

export default mongoose.model("User", userSchema);
