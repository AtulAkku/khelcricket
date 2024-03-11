import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { validateRequired } from '../Utils/FormValidation';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';


function Login() {
  const {logIn} = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const validateForm = () => {
    const requiredFields = ['email', 'password'];
    validateRequired(requiredFields);
    return document.querySelector('.is-invalid') === null;
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const gLogin = async(credentialResponse) => {
    const cred = jwtDecode(credentialResponse.credential);
    const user = storedUsers.find((user) => user.email === cred.email)
    if (user) {
      await logIn(user, true)
      navigate('/');
    } else {
      navigate('/gSignAdd', { state: { email: cred.email, name: cred.name, message: 'You are not registered yet???' } })
    }
  }
  const Login = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      let user;
      if (storedUsers != null) {
        user = storedUsers.find((user) => user.email === email && user.password === password);
      }
      if (user) {
        logIn(user, false)
        navigate('/');
      } else {
        toast.error('Invalid email or password', { position: 'top-right' });
      }
    } else {
      toast.error('Form Fields are invalid', {
        position: 'top-right',
      });
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="container shadow mx-auto bg-light rounded-top row mt-2">
        <div className='col'><img className='img-fluid' src='./img/cricketLogin.png' alt='' /></div>
        <div className='col d-flex align-item-center flex-column justify-content-center p-2'>
          <div className='text-center h1 p-3 rounded' >Login</div>
          <form className='p-3'>
            <div className="form-group my-3">
              <label htmlFor="email" className='ms-1 mb-2'>Email address</label>
              <input type="email" className="form-control py-2" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <div id="emailError" className="invalid-feedback"></div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="password" className='ms-1 mb-2'>Password</label>
              <div className="input-group">
               <input type={showPassword ? "text" : "password"} className="form-control py-2" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /> 
              <button className="btn bg-nav rounded-end" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
              <div id="passwordError" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="mt-2">
              <a href="/signup" className='text-decoration-none'>New User? Register!</a>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  gLogin(credentialResponse);
                }}
                onError={() => {
                  toast.error('Login Failed', {
                    position: 'top-right',
                  });
                }}
              />
              <button type="button" className="btn bg-nav px-5 fs-6" onClick={Login}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login