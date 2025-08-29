import React, { useState } from "react";
import { useVerifyOtpMutation } from "../api/AuthApi"; 
import { useLocation,useNavigate } from "react-router-dom"; // ✅ import useLocation

const OtpVerify = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const email = location.state?.email; // ✅ email yahan se milega
  
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join(""); 
    try {
      const res = await verifyOtp({ email, otp: code }).unwrap();
      console.log("OTP Verified:", res);
      alert("OTP Verified Successfully!");
      navigate("/signin")
    } catch (err) {
      console.error("OTP failed:", err);
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="mainAuth">
      <div className="form" style={{ width: "300px", padding: "20px" }}>
        <div className="se">
          <h2 align="center">Verify OTP</h2>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  style={{
                    width: "60px",
                    height: "60px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                  required
                />
              ))}
            </div>
            <button
              type="submit"
              style={{
                marginTop: "25px",
                background: "red",
                color: "white",
                padding: "7px 13px",
              }}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
