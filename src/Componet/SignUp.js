import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { validateRequired, validatePhone, validatePinCode, validateEmail, validatePassword, confirmPassword } from '../Utils/FormValidation';
import { toast, ToastContainer } from 'react-toastify';
import jsonData from '../Utils/pincode.json';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../Utils/AuthContext';
import Login from './Login';
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

  const handlePasswordinput = (inputPassword) => {
    setPassword(inputPassword);
    const passwordInput = document.getElementById('password');
    validatePassword(passwordInput, inputPassword);
  }
  const validateForm = () => {
    const requiredFields = ['email', 'name', 'phoneNo', 'pinCode', 'password', 'conPassword'];
    const phoneInput = document.getElementById('phoneNo');
    const pinCodeInput = document.getElementById('pinCode');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const conPasswordInput = document.getElementById('conPassword');
    validateRequired(requiredFields);
    validatePhone(phoneInput, phoneInput.value);
    validatePinCode(pinCodeInput, parseInt(pinCodeInput.value));
    validateEmail(emailInput, emailInput.value);
    // validatePassword(passwordInput, passwordInput.value);
    confirmPassword(passwordInput.value, conPasswordInput.value, conPasswordInput);
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
      const newUser = { email, name, phoneNo, pinCode, city, state, password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setEmail('');
      setName('');
      setPhoneNo('');
      setPinCode('');
      setCity('');
      setState('');
      setPassword('');
      setConPassword('');
      toast.success('Registration Successful', {
        position: 'top-right',
      });
      navigate('/thankYouPage')
    } else {
      toast.error('Form Fields are invalid', {
        position: 'top-right',
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto text-light rounded-top row popins">
        <div className='col-5'>
          {/* <img className='img-fluid' src='./img/cricketer2.png' alt='' /> */}
          <Lottie
            options={defaultOptions}
            height={450}
            width={450}
          />
        </div>
        <div className='col-7'>
          <div className='text-center h1 m-0 p-3 rounded' >Signup</div>
          <form className="g-0 p-3">
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <div id="emailError" className="invalid-feedback"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <div id="nameError" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="phoneNo">Phone Number</label>
                <input type="text" className="form-control" id="phoneNo" value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} /> <div id="phoneNoError" className="invalid-feedback"></div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="pinCode">Pin Code</label>
                <input type="text" className="form-control" id="pinCode" value={pinCode} onChange={searchCity} /> <div id="pinCodeError" className="invalid-feedback"></div>
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
                  <input type={showPassword1 ? "text" : "password"} className="form-control" id="password" value={password} onChange={(e) => { handlePasswordinput(e.target.value) }} />
                  <button className="btn btn-outline-light rounded-end" type="button" onClick={togglePasswordVisibility1}>
                    {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div id="passwordError" className="invalid-feedback"></div>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label className="ms-1 mb-1" htmlFor="conPassword">Confirm Password</label>
                <div className="input-group">
                  <input type={showPassword2 ? "text" : "password"} className="form-control" id="conPassword" value={conPassword} onChange={(e) => { setConPassword(e.target.value) }} />
                  <button className="btn btn-outline-light rounded-end" type="button" onClick={togglePasswordVisibility2}>
                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div id="conPasswordError" className="invalid-feedback"></div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <a href="/login" className='text-decoration-none link-light'>Already Registered? Login!</a>
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