import React from 'react'
import { Link } from 'react-router-dom';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className='signup'>
        <div className='leftSection'>
            <img id="logo" src={require("../../images/logo.png")} alt="appLogo" />
            <h2>Hello!</h2>
            <div className='form'>
                <span className="lined">Create Your Account</span>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Email-Id' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <button>SIGN UP</button>
                <p>OR</p>
                <div className="dlogin">
                  <div>
                    <span>Sign Up With Google</span>
                    <img src={require("../../images/google.png")} alt="" />
                  </div>
                  <div>
                    <span>Sign Up With Github</span>
                    <img src={require("../../images/github.png")} alt="" />
                  </div>
                </div>
                <p className="lp">Already have an Account?  <Link className="link" to="/login">LOGIN</Link></p>
            </div>
        </div>
        <div className='rightSection'>
          <div className="img1">
            <img src={require("../../images/sideimage.png")} alt="" />
          </div>
          <div className="img2">
            <img src={require("../../images/Vector.png")} alt="" />
          </div>
        </div>
    </div>
  )
}

export default SignUp