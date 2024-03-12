import React from 'react'
import { useAuth } from '../../Utils/AuthContext'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Login from '../Login';
import { ToastContainer } from 'react-toastify';

const LowerNav = () => {
  const { user, isAuth } = useAuth();
  return (
    <>
    <ToastContainer/>
      <div className="container">
        <div className="row mx-auto">
          <div className="col text-white text-shadow d-flex align-items-center">
            <div>
              {
                isAuth ?
                  <span className="h5">Welcome {user.name} !</span> :
                  <>
                    <div className="d-flex justify-content-between mb-2">
                      <a className="btn btn-outline-light px-5" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">Log In</a>
                      <a href="/signup" className="btn btn-light px-5">Sign Up</a>
                    </div>
                  </>
              }
              <div className="mb-2"><span className="h1">KHEL Cricket Concierge</span></div>
              {/* <p>The sound of leather on willow is music to ears !</p> */}

              <div className="mb-3 d-flex align-items-center">
                <img src="img/qrImg.png" alt="QR Code" className="img-fluid w-25" />
                <div className="ms-3">
                  <div className="mb-2">Scan & Get the KHEL App now!</div>
                  <div className="d-flex justify-content-around fs-3">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <form className="form-inline d-flex">
                <input className="form-control me-2" type="search" placeholder="Find Venues" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="col d -flex justify-content-end align-items-end py-2 pb-4">
            <img className="img-fluid pe-0" src="img/cricketer.png" alt="" />
          </div>
        </div>
      </div>

      <Login/>
    </>
  )
}

export default LowerNav