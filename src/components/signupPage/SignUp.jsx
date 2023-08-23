import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./SignUp.scss"

const SignUp = () => {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const validateFormInput = () => {
    let isValid = true;
    let errors = {};
  
    if(formInput.firstName.length < 3){
      isValid = false;
      errors.firstName = 'Name should be at least three chars';
    }

    if(formInput.lastName.length < 3){
      isValid = false;
      errors.lastName = 'Name should be at least three chars';
    }

    if (!formInput.email.includes('@')) {
      isValid = false;
      errors.email = 'Invalid email address';
    }

    if(formInput.password.length < 6){
      isValid =  false;
      errors.passwordl = 'Password length should be at least 6 chars'
    }
  
    if (formInput.password !== formInput.confirmPassword) {
      isValid = false;
      errors.password = 'Passwords do not match';
    }
    return { isValid, errors };
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { isValid, errors } = validateFormInput();
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
  
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInput)
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while submitting the form data');
      }
  
      // handle successful form submission here
    } catch (error) {
      // handle error here
    }
  }

  return (
    <div className='signup'>
        <div className='leftSection'>
            <img id="logo" src={require("../../images/logo.png")} alt="appLogo" />
            <h2>Hello!</h2>
            <div className='form'>
                <span className="lined">Create Your Account</span>
                <input type="text" placeholder='First Name' name='firstName' onChange={handleInputChange} />
                {formErrors.firstName && <p>{formErrors.firstName}</p>}
                <input type="text" placeholder='Last Name' name='lastName' onChange={handleInputChange} />
                {formErrors.lastName && <p>{formErrors.lastName}</p>}
                <input type="text" placeholder='Email-Id' name='emailId' onChange={handleInputChange} />
                {formErrors.email && <p>{formErrors.email}</p>}
                <input type="text" placeholder='Password' name='emailId' onChange={handleInputChange} />
                {formErrors.passwordl && <p>{formErrors.passwordl}</p>}
                <input type="text" placeholder='Confirm Password' name='emailId' onChange={handleInputChange} />
                {formErrors.password && <p>{formErrors.password}</p>}
                <button onClick={handleSubmit}>SIGN UP</button>
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
                <p className="lp">Already have an Account?  <Link className="link" to="/">LOGIN</Link></p>
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