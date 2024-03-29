import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { validateRequired, validatePhone, validatePinCode, validateEmail, validatePassword, confirmPassword } from '../Utils/FormValidation';
import { toast, ToastContainer } from 'react-toastify';
import jsonData from '../Utils/pincode.json';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../Utils/AuthContext';
import Lottie from 'react-lottie';
import animationData from './animations/formSign.json';

const SignUp = () => {
  const { logIn } = useAuth();
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",

    }
  };
  const checkEmail = () => {
    const emailInput = document.getElementById('email');
    const emailVerify = document.getElementById('emailVerify');
    validateEmail(emailInput, emailInput.value)
    if (storedUsers.find((user) => user.email === email)) {
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
      emailVerify.classList.remove('valid-feedback');
      emailVerify.classList.add('invalid-feedback');
      emailVerify.textContent = 'Account already Exist!';
    }
  }
  const handlePasswordinput = (inputPassword) => {
    setPassword(inputPassword);
    const passwordInput = document.getElementById('password');
    validatePassword(passwordInput, inputPassword);
  }
  const validateForm = () => {
    const requiredFields = ['email', 'name', 'phoneNo', 'pinCode', 'password', 'conPassword'];
    requiredFields.forEach((field) => {
      validateRequired(field);
    })
    return document.querySelector('.is-invalid') === null;
  }

  const gSignUp = (credentialResponse) => {
    const cred = jwtDecode(credentialResponse.credential);
    const user = storedUsers.find((user) => user.email === cred.email)
    if (user) {
      logIn(user, true);
      navigate('/')
    } else {
      navigate('/gSignAdd', { state: { email: cred.email, name: cred.name, message: "Please add your profile information" } });
    }
  }

  const searchCity = (e) => {
    const newPincode = e.target.value;
    setPinCode(newPincode);
    const matchingEntry = jsonData.find(entry => entry.pincode === parseInt(newPincode));
    if (matchingEntry) {
      setCity(matchingEntry.Taluk)
      setState(matchingEntry.statename);
    } else {
      setCity('');
      setState('');
    }
  }
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  }
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  }
  const Register = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      if (storedUsers.find((user) => user.email === email)) {
        toast.error('Account already exists! Please Login', {
          position: 'top-right',
        });
        return;
      }
      const newUser = { email, name, phoneNo, pinCode, city, state, password, avatarUrl : 'defaultAvtar.png' };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      toast.success('Registration Successful', {
        position: 'top-right',
      });
      navigate('/thankYouPage', { state: { message: "Thank you for Signing up", btnText: "Click here for Home", link: "/" } })
    } else {
      toast.error('Form Fields are invalid', {
        position: 'top-center',
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto text-light rounded-top row popins">
        <div className='col-lg-5 col-12 left'>
          {/* <img className='img-fluid' src='./img/cricketer2.png' alt='' /> */}
          <Lottie
            options={defaultOptions}
            height={450}
            width={450}
          />
        </div>
        <div className='col-12 col-lg-7 right'>
          <div className='text-center h1 m-0 p-3 rounded' >Signup</div>
          <form className="g-0 p-3">
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" value={email} onBlur={checkEmail} onChange={(e) => { setEmail(e.target.value) }} />
                <div id="emailVerify"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={name} onBlur={() => { validateRequired('name') }} onChange={(e) => { setName(e.target.value) }} />
                <div id="nameVerify"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="phoneNo">Phone Number</label>
                <input type="text" className="form-control" id="phoneNo" value={phoneNo} onBlur={(e) => { validatePhone(e.target, e.target.value) }} onChange={(e) => { setPhoneNo(e.target.value) }} /> <div id="phoneNoVerify" className="invalid-feedback"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="pinCode">Pin Code</label>
                <input type="text" className="form-control" id="pinCode" onBlur={(e) => { validatePinCode(e.target, e.target.value) }} value={pinCode} onChange={searchCity} />
                <div id="pinCodeVerify"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" value={city} readOnly />
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="state">State</label>
                <input id="state" className="form-control" value={state} readOnly />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="password">Password</label>
                <div className="input-group">
                  <input type={showPassword1 ? "text" : "password"} className="form-control" id="password" value={password} onBlur={(e) => { validatePassword(e.target, e.target.value) }} onChange={(e) => { handlePasswordinput(e.target.value) }} />
                  <button className="btn btn-outline-light rounded-end" type="button" onClick={togglePasswordVisibility1}>
                    {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div id="passwordVerify"></div>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="conPassword">Confirm Password</label>
                <div className="input-group">
                  <input type={showPassword2 ? "text" : "password"} className="form-control" id="conPassword" value={conPassword} onBlur={(e) => { confirmPassword(password, e.target.value, e.target) }} onChange={(e) => { setConPassword(e.target.value) }} />
                  <button className="btn btn-outline-light rounded-end" type="button" onClick={togglePasswordVisibility2}>
                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div id="conPasswordVerify"></div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <a className='text-decoration-none link-light' data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">Already Registered? Login!</a>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  gSignUp(credentialResponse);
                }}
                onError={() => {
                  toast.error('Login Failed', {
                    position: 'top-right',
                  });
                }}
              />
              <button type="button" className="btn btn-outline-light px-5 fs-6" onClick={Register}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp