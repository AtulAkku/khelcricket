import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useAuth } from '../../Utils/AuthContext';

const Footer = () => {
  const { logOut, isAuth } = useAuth();
  const handleFooterLogout= () => {
     logOut();
  }
  return (
    <footer className='bg-black text-light text-center'>
      <div>
        <div className="row g-0 pt-5">
          <div className="col-md-2">
            <ul>
              <li className="h5 text-light">About</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-light">Help</li>
              <li>Privacy Policy</li>
              <li>Cancelation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-light">Quick Links</li>
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              {
                isAuth ? <li className="nav-item">
                  <span className="nav-link" onClick={handleFooterLogout}>Logout</span>
                </li> :
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">Login</a>
                  </li>
              }
              <li>Cart</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="h5 text-light">Consumer Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Policy</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-light">Social</li>
              <li><FaFacebook /> Facebook</li>
              <li><FaTwitter /> Twitter</li>
              <li><FaInstagram /> Instagram</li>
            </ul>
          </div>
        </div>
        <div className='text-center text-light py-3'> &#169; Copyright 2024</div>
      </div>
    </footer >
  )
}

export default Footer