import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        <Navigate to={'/home'} />
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='login'>
      <div className='leftSection'>
        <img id='logo' src={require('../../images/logo.png')} alt='appLogo' />
        <h2>Welcome Arya Soni</h2>
        <div className='form'>
          <span className='lined'>Log in to your account</span>
          <input style={{ marginTop: "100px" }} type='text' placeholder='Email-Id' name='emailId' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmit}>LOGIN</button>
          {error && <p className='error'>{error}</p>}
          <p>OR</p>
          <div className='dlogin'>
            <div>
              <span>Login With Google</span>
              <img src={require('../../images/google.png')} alt='' />
            </div>
            <div>
              <span>Login With Github</span>
              <img src={require('../../images/github.png')} alt='' />
            </div>
          </div>
          <p className='lp'>
            Don't have an Account? <Link className='link' to='/signup'>SIGN UP</Link>
          </p>
        </div>
      </div>
      <div className='rightSection'>
        <div className='img1'>
          <img src={require('../../images/sideimage.png')} alt='' />
        </div>
        <div className='img2'>
          <img src={require('../../images/Vector.png')} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Login;
