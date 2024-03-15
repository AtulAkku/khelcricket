import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { validateRequired } from '../Utils/FormValidation';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
function Login() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const closeOffcanvas = () => {
    document.getElementById('offCanvasClose').click();
  };
  const validateForm = () => {
    const requiredFields = ['emailLogin', 'passwordLogin'];
    requiredFields.forEach((field)=>{
      validateRequired(field);
    })
    return document.querySelector('.is-invalid') === null;
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const gLogin = async (credentialResponse) => {
    const cred = jwtDecode(credentialResponse.credential);
    const user = storedUsers.find((user) => user.email === cred.email)
    if (user) {
      logIn(user, true)
      toast.success('Logged in Successfully!', { position: 'top-center' });
      closeOffcanvas();
    } else {
      closeOffcanvas();
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
        logIn(user, false);
        toast.success('Logged in Successfully!', { position: 'top-center' });
        closeOffcanvas();
      } else {
        toast.error('Invalid email or password', { position: 'top-center' });
      }
    } else {
      toast.error('Form Fields are invalid', {
        position: 'top-center',
      });
    }
  }
  return (
    <>
      <div className="offcanvas offcanvas-end bg-nav text-white popins" data-bs-scroll="true" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title ps-3" id="offcanvasLabel">LOGIN</h5>
          <button type="button" id="offCanvasClose" className="btn-close text-light btn btn -outline-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form className='p-3'>
            <div className="form-group my-3">
              <label htmlFor="email" className='ms-1 mb-2'>Email address</label>
              <input type="email" className="form-control py-2" id="emailLogin" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <div id="emailLoginVerify" className="invalid-feedback"></div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="passwordLogin" className='ms-1 mb-2'>Password</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control py-2" id="passwordLogin" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className="btn btn-outline-light rounded-end" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <div id="passwordLoginVerify" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="mt-2">
              <a href="/signup" className='text-decoration-none link-light'>New User? Register!</a>
            </div>
            <div className="d-flex flex-column justify-content-center text-center mt-2">
              <button type="button" className="btn btn-outline-light px-3 my-2 fs-6" onClick={Login}>Log In</button>
              or
              <div className="m-2 mx-auto ">
                <div>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      gLogin(credentialResponse);
                    }}
                    onError={() => {
                      toast.error('Login Failed', {
                        position: 'top-center',
                      });
                    }}
                  />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login