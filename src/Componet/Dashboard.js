import React, { useState, useEffect } from 'react'
import { FaBook, FaMapLocationDot } from "react-icons/fa6";
import { FaEdit, FaEye } from 'react-icons/fa'
import { useAuth } from '../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileOffCanvas from './partials/ProfileOffCanvas';
import { BiSupport, BiUser } from 'react-icons/bi';
import VenueModal from './partials/VenueModal';
import BookingComp from './partials/BookingComp';
import HelpNSupport from './partials/HelpNSupport';
import MyProfile from './partials/MyProfile';

const Dashboard = () => {
  const { user, logOut, isAuth } = useAuth();
  const [showVenueModal, setShowVenueModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [viewBooking, setViewBooking] = useState([]);
  const [storedBookings, setStoredBookings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('myBookings');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  const getComponent = () => {
    switch (activeTab) {
      case 'myBookings':
        return <BookingComp
          userBookings={userBookings}
          handleVenueModal={handleVenueModal}
        />;
      case 'myProfile':
        return <MyProfile 
        selectedAvatar = {selectedAvatar}
        />;
      case 'helpAndSupport':
        return <HelpNSupport />;
      default:
        return null;
    }
  };
  const handleVenueModal = (item) => {
    setViewBooking(item);
    setShowVenueModal(true)

  }
  const closeVenueModal = () => {
    setShowVenueModal(false);
  }
  const handleLogOut = () => {
    logOut();
    navigate('/thankYouPage', { state: { message: "You have been Logged Out!", btnText: "Click here for Home", link: "/" } })
  }
  useEffect(() => {
    const auth = sessionStorage.getItem('isAuth')
    if (!auth) {
      navigate('/preloader');
    }
    const storedAvatar = localStorage.getItem('selectedAvatar') ?? "../../img/avatars/defaultAvtar.png";
    console.log(storedAvatar);
    if (storedAvatar) {
      setSelectedAvatar(storedAvatar);
    }
    const bookings = (JSON.parse(localStorage.getItem('bookings'))) ?? [];
    setStoredBookings(bookings);
    const filteredBookings = storedBookings.filter((booking) => user.email === booking.userEmail);
    setUserBookings(filteredBookings);
  }, [navigate, isAuth]);
  return (
    <>
      <ProfileOffCanvas
        setDashAvatar={setSelectedAvatar}
        selectedAvatar = {selectedAvatar}
      />
      {showVenueModal && (<VenueModal
        showVenueModal={showVenueModal}
        closeVenueModal={closeVenueModal}
        viewBooking={viewBooking}
      />)}

      <div className="container-fluid g-0 row popins">
        <div className="col-md-3 bg-light">
          <div className="menu">
            <div className="row">
              <div className="col col-lg-5 p-3 text-center">
                <img src={`/img/avatars/${user.avatarUrl}`} className="img-fluid w-75 rounded-circle" alt="Selected Avatar" />
              </div>
              <div className="col col-lg-7 d-flex align-items-start flex-column justify-content-center my-auto">
                <div className="h5">{user.name}({user.nickName})</div>
                <div className="h6">{user.email}</div>
              </div>
            </div>
            <div className={`hover shadow my-3 p-3 ${activeTab === 'myBookings' ? 'bg-nav text-light' : 'm-3'}`}>
              <div className="row" role='button' onClick={() => { handleTabClick('myBookings') }}>
                <div className="col-md-4 fs-2 text-center"><span><FaBook /></span></div>
                <div className="col-md-8 d-flex align-items-center"><p className='h5 pt-3'>My Bookings</p></div>
              </div>
            </div>
            <div className={`hover shadow my-3 p-3 ${activeTab === 'myProfile' ? 'bg-nav text-light' : 'm-3'}`}>
              <div className="row" role='button' onClick={() => { handleTabClick('myProfile') }}>
                <div className="col-md-4 fs-2 text-center"><BiUser /></div>
                <div className="col-md-8 d-flex align-items-center"><p className='h5 pt-3'>My Profile</p></div>
              </div>
            </div>
            <div className={`hover shadow my-3 p-3 ${activeTab === 'helpAndSupport' ? 'bg-nav text-light' : 'm-3'}`}>
              <div className="row" role='button' onClick={() => { handleTabClick('helpAndSupport') }}>
                <div className="col-md-4 fs-2 text-center"><BiSupport /></div>
                <div className="col-md-8 d-flex align-items-center"><p className='h5 pt-3'>Help & Support</p></div>
              </div>
            </div>
            <div className='text-center'>
              <div className="shadow my-3 w-75 bg-nav text-light btn p-3" onClick={handleLogOut}>
                <span className='h5 text-center'>Logout</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 px-5 m t-4">
          {getComponent()}
        </div>
      </div>
    </>
  );
};

export default Dashboard