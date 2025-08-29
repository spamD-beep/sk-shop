import React, { useState } from 'react'
import './Auth.css'
import Login from '../assets/img/login.png'
import { useSignupMutation } from '../api/AuthApi'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [userEmail,setUserEmail]=useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await signup(form).unwrap();
      console.log("Signup successful:", res);
      alert("Signup successful! Please verify OTP.");
      setUserEmail(res.email);
      // ✅ Signup success → Redirect to OTP page with email
      navigate("/verify-otp", { state: { email: form.email } });

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'user'
      });
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed!");
    }
  };

  return (
    <div className='mainAuth'>
      <div className='form'>
        <div className='first'>
          <img src={Login} alt="Login"/>
        </div>
        <div className='secs'>
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <label>First Name :</label>
                <input 
                  type='text' 
                  name='firstName'
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder='Enter Your First Name'
                  required
                />
              </div>
              <div>
                <label>Last Name :</label>
                <input 
                  type='text' 
                  name='lastName'
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder='Enter Your Last Name'
                  required
                />
              </div>
            </div>

            <label>Email :</label>
            <input 
              type='email' 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              required
            />

            <label>Phone :</label>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='Enter Your Phone Number'
              required
            />

            <label>Password :</label>
            <input 
              type='password' 
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Enter Your Password'
              required
            />

            <label>Confirm Password :</label>
            <input 
              type='password' 
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Your Password'
              required
            />

            <input type="submit" value={isLoading ? "Loading..." : "Signup"} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
