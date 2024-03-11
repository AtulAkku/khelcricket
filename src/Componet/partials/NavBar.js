import React, { useEffect, useState } from 'react'
import { FaStore } from 'react-icons/fa'
import { BiLogInCircle } from 'react-icons/bi'
import { MdStadium } from 'react-icons/md'
import { useAuth } from '../../Utils/AuthContext'
import { FaUser } from 'react-icons/fa6'
const NavBar = () => {
  const { isAuth } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  
  useEffect(() => {
    setActiveTab(window.location.pathname.substring(1) || 'home');
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark text -light bg-nav px-5 sticky-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex link -light text-light" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className= {`nav-item fs-5 ${activeTab === 'home' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('home')}>
                <a className="nav-link btn d-flex link-light" href="/"><div className="pe-2"><FaStore /></div> <span className="text-nowrap pt-1">Home</span></a>
              </li>
              <li className={`nav-item fs-5 ${activeTab === 'venues' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('venues')}>
                <a className="nav-link btn d-flex link-light" href="/venues"><div className="pe-2"><MdStadium /></div><span className="text-nowrap pt-1">Venues</span></a>
              </li>
              { (!isAuth) ?
                <li className={`nav-item fs-5 ${activeTab === 'login' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('login')}>
                  <a className="nav-link btn d-flex link-light" href="/login"><div className="pe-2"><BiLogInCircle /></div><span className="text-nowrap pt-1">Login</span></a>
                </li>
                : 
                <li className={`nav-item fs-5 ${activeTab === 'dashboard' ? 'text-decoration-underline' : ''}`} onClick={() => handleTabClick('dashboard')}>
                  <a className="nav-link btn d-flex link-light" href="/dashboard"><div className="pe-2"><FaUser /></div><span className="text-nowrap pt-1">Dashboard</span></a>
                </li>}
            </ul>
          </div>
        </div>
        <a className="navbar-brand" href="/"><img src="img/logo.png" height="90" className="d-inline-block mx-3" alt='' /></a>

      </nav>
    </>
  )
}

export default NavBar