import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useAuth } from '../../Utils/AuthContext';
import PaymentConfirm from './PaymentConfirm';

const Footer = () => {
  const { logOut, isAuth } = useAuth();
  const handleFooterLogout= () => {
     logOut();
  }
  return (
    <footer className='bg-black text-light text-center'>
      <div>
        <PaymentConfirm />
        <div className="row g-0 pt-5">
          <div className="col-md-2">
            <ul>
              <li className="h5 text-muted">About</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-muted">Help</li>
              <li><a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a></li>
              <li>Cancelation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-muted">Quick Links</li>
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
              <li className="h5 text-muted">Consumer Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Policy</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <li className="h5 text-muted">Social</li>
              <li><FaFacebook /> Facebook</li>
              <li><FaTwitter /> Twitter</li>
              <li><FaInstagram /> Instagram</li>
            </ul>
          </div>
        </div>
        <div className='text-center text-muted py-3'> &#169; Copyright 2024</div>
      </div>
    </footer >
  )
}

export default Footer