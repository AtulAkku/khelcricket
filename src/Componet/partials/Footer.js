import React,{useState} from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useAuth } from '../../Utils/AuthContext';
import PaymentSuccessfull from './PaymentSuccessfull';
import VenueModal from './VenueModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const { logOut, isAuth } = useAuth();
  const handleFooterLogout= () => {
     logOut();
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }
  const handleCloseModal2 = () => {
    setShowModal2(false);
  }
  return (
    <footer className='bg-black text-light text-center'>
      <div>
        {showModal && (<PaymentSuccessfull
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />)}
      {showModal2 && (<VenueModal
        showModal2={showModal2}
        handleCloseModal2={handleCloseModal2}
      />)}
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
              <li><a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasPaymentConfirmation" role="button" aria-controls="offcanvasPayment">
  Link with href
</a></li>
              <li onClick={()=>{setShowModal(true)}}>Cancelation & Returns</li>
              <li onClick={()=>{setShowModal2(true)}}>FAQ</li>
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