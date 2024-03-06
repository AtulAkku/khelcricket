import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { validateRequired } from '../Utils/FormValidation';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const validateForm = () => {
    const requiredFields = ['email', 'password'];
    validateRequired(requiredFields);
    return document.querySelector('.is-invalid') === null;
  }
  const gLogin = (credentialResponse) => {
    const cred = jwtDecode(credentialResponse.credential);
    const user = storedUsers.find((user) => user.email === cred.email)
    if (user) {
      sessionStorage.setItem('isAuth', true);
      sessionStorage.setItem('isGUser', true);
      sessionStorage.setItem('userData', JSON.stringify(user));
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
        toast.success('Logged In Successfully!', { position: 'top-right' });
        sessionStorage.setItem('isAuth', true);
        sessionStorage.setItem('isGUser', true);
        sessionStorage.setItem('userData', JSON.stringify(user));
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
      <div className="container p-4 g-0 shadow mx-auto my-4 bg-light rounded row ">
        <div className='col' ><img className='img-fluid rounded' src='./img/cricketLogin.png' alt='' /></div>
        <div className='col d-flex align-item-center flex-column justify-content-center p-2'>
          <div className='text-center h1 m-0 p-3 rounded' >Login</div>
          <form className='p-3'>
            <div className="form-group my-3">
              <label for="email" className='fs-5 ms-1 my-3'>Email address</label>
              <input type="email" className="form-control py-2" id="email" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <div id="emailError" className="invalid-feedback"></div>
            </div>
            <div className="form-group my-3">
              <label for="password" className='fs-5 ms-1 my-3'>Password</label>
              <input type="password" className="form-control py-2" id="password" placeholder="Enter Password" value={password} onChange={(e) => { setPassword(e.target.value) }} /> <div id="passwordError" className="invalid-feedback"></div>
            </div>
            <div className="mt-2">
              <a href="/signup" className='text-decoration-none'>New User? Register!</a>
            </div>
            <div className="d-flex justify-content-between">
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