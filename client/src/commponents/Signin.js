import React from 'react';
import { useForm } from 'react-hook-form';
import './Auth.css';
import Login from '../assets/img/login.png';
import { useLoginMutation } from '../api/AuthApi';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));

      // Redirect based on role
      if (res.user.role === 'Admin') navigate('/Dashboard');
      else navigate('/');
    } catch (err) {
      alert(err.data.message);
    }
  };

  return (
    <div className='mainAuth'>
      <div className='form'>
        <div className='first'>
          <img src={Login} alt="Login" />
        </div>
        <div className='secs'>
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email :</label>
            <input
              type='email'
              placeholder='Enter Your Email'
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

            <label>Password :</label>
            <input
              type='password'
              placeholder='Enter Your Password'
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}

            <input type="submit" value="Sign in"/>
            <div style={{marginTop:"20px"}}>Don't have an account,Go to <Link style={{color:"red"}} to="/signup">Signup</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
