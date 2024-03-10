import React, { useState } from 'react'
import { FaOpencart, FaStore } from 'react-icons/fa'
import { BiLogInCircle } from 'react-icons/bi'
import { useAuth } from '../../Utils/AuthContext'
import { FaUser } from 'react-icons/fa6'
const NavBar = () => {
  const { isAuth } = useAuth();
  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tabName) => {
    console.log(tabName);
    setActiveTab(tabName);
    console.log(activeTab);
  };
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-nav bg -opacity-25 px-5 sh adow sticky-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-conte nt-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className= "nav-item" onClick={() => handleTabClick('home')}>
                <a className={`nav-link btn d-flex ${activeTab === 'home' ? 'link-light' : ''}`} href="/"><div className="pe-2 fs-4"><FaStore /></div> <span className="text-nowrap pt-1 fs-4">Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn d-flex justify-con tent-center" href="/"><div className="pe-2 fs-4"><FaOpencart /></div><span className="text-nowrap pt-1 fs-4">Cart</span></a>
              </li>
              { (!isAuth) ?
                <li className="nav-item" onClick={() => handleTabClick('login')}>
                  <a className={`nav-link btn d-flex ${activeTab === 'login' ? 'link-light' : ''}`} href="/login"><div className="pe-2 fs-4"><BiLogInCircle /></div><span className="text-nowrap pt-1 fs-4">Login</span></a>
                </li>
                : 
                <li className="nav-item" onClick={() => handleTabClick('dashboard')}>
                  <a className={`nav-link btn d-flex ${activeTab === 'dashboard' ? 'link-light' : ''}`} href="/dashboard"><div className="pe-2 fs-4"><FaUser /></div><span className="text-nowrap pt-1 fs-4">Dashboard</span></a>
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