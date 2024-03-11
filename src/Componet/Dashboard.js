import React, { useState, useEffect } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { useAuth } from '../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfilePicModal from './ProfilePicModal';
import { FaEdit } from 'react-icons/fa';


const Dashboard = () => {
  const { user, logOut, isAuth } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate('/')
  }
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const auth = sessionStorage.getItem('isAuth')
    if (!auth) {
      navigate('/')
    }
    const storedAvatar = localStorage.getItem('selectedAvatar');
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
  }, [navigate, isAuth]);
  return (
    <>
      {showModal && <ProfilePicModal onClose={handleCloseModal} showModal={showModal} />}
      <div className="bg-white p-4">
        <div className="row mx-auto">
          <div className="col col-12 col-lg-4">
                <div className='row'>
                  <div className="col col-lg-6 text-center">
                    <img src={selectedAvatar || '/img/avatars/defaultAvtar.png'} className="img-fluid w-50 rounded-circle" alt="Selected Avatar" onClick={handleOpenModal} />
                  </div>
                  <div className="col col-lg-6 my-auto">
                    <h5 className="card-title">{user.name}</h5>
                    <div className="text-muted" role="button" onClick={handleOpenModal}>Change Avatar <FaEdit /></div>
                  </div>

                </div>
                <table className="table table-striped my-4">
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>:</td>
                      <td>{user.phoneNo}</td>
                    </tr>
                    <tr>
                      <td>Pincode</td>
                      <td>:</td>
                      <td>{user.pinCode}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>:</td>
                      <td>{user.city}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>:</td>
                      <td>{user.state}</td>
                    </tr>
                  </tbody>
                </table>
              <div className="d-flex justify-content-center mt-2">
                <button type="button" className="btn bg-nav px-5 fs-6" onClick={handleLogOut}>Log Out</button>
              </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="container p-5">
                <h5 className="h3">Booked Events</h5>
                <hr />
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Venue</th>
                      <th scope="col">Booking Date</th>
                      <th scope="col">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                      <td>15-jun-2001</td>
                      <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                    </tr>
                    <tr>
                      <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                      <td>15-jun-2001</td>
                      <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                    </tr>
                    <tr>
                      <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                      <td>15-jun-2001</td>
                      <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard