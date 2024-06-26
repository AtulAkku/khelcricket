import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Utils/AuthContext'
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const { isAuth, logOut } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate('/');
  }

  useEffect(() => {
    setActiveTab(window.location.pathname.substring(1) || 'home');
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-nav px-5 sticky-top">
        <a className="navbar-brand" href="/"><img src="img/logomodified3.png" height="80" className="d-inline-block ms-5 ps-4" alt='' /></a>
        <div className="container-fluid me-5 pe-5">
          <div className="collapse navbar-collapse d-flex link -light text-light justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className={`nav-item fs-5 ${activeTab === 'home' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('home')}>
                <a className="nav-link btn d-flex link-light" href="/">
                  <span className="text-nowrap pt-1">HOME</span></a>
              </li>
              <li className={`nav-item fs-5 ${activeTab === 'venues' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('venues')}>
                <a className="nav-link btn d-flex link-light" href="/venues">
                  <span className="text-nowrap pt-1">VENUES</span>
                </a>
              </li>
              {(!isAuth) ?
                <li className="nav-item fs-5">
                  <a className="nav-link btn d-flex link-light" id="logInBtn" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
                    <span className="text-nowrap pt-1">LOGIN</span>
                  </a>
                </li>
                :
                <>
                  <li className={`nav-item fs-5 ${activeTab === 'dashboard' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('dashboard')}>
                    <a className="nav-link btn d-flex link-light" href="/dashboard">
                      <span className="text-nowrap pt-1">DASHBOARD</span>
                    </a>
                  </li>
                  <li className="nav-item fs-5 ps-2 d-flex align-items-center">
                    <button type="button" className="btn btn-outline-light fs-6 text -white" onClick={handleLogOut}>LOGOUT</button>
                  </li>
                </>
                }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar