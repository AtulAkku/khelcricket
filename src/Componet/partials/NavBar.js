import React from 'react'
import { FaOpencart, FaStore } from 'react-icons/fa'
import { BiLogInCircle } from 'react-icons/bi'
import { useAuth } from '../../Utils/AuthContext'
import { FaUser } from 'react-icons/fa6'
const NavBar = () => {
  const { isAuth } = useAuth();
  
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-info bg-opacity-25 px-5 shadow">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-conte nt-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* <li className="nav-item drop down" role="button">
                <a className="nav-link btn btn-p rimary d-flex justi fy-content-center" href="#login" id="navbarDropdown" role="button">
                  <div className='pe-2'><BiLogInCircle /></div> Login <div className="icon"><FaChevronDown /></div>
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link btn d-flex justify-cont ent-center" href="/"><div className="pe-2 fs-4"><FaStore /></div> <span className="text-nowrap pt-1 fs-4">Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn d-flex justify-con tent-center" href="/"><div className="pe-2 fs-4"><FaOpencart /></div><span className="text-nowrap pt-1 fs-4">Cart</span></a>
              </li>
              { (!isAuth) ?
                <li className="nav-item">
                  <a className="nav-link btn d-flex justify-con tent-center" href="/login"><div className="pe-2 fs-4"><BiLogInCircle /></div><span className="text-nowrap pt-1 fs-4">Login</span></a>
                </li>
                : 
                <li className="nav-item">
                  <a className="nav-link btn d-flex justify-con tent-center" href="/dashboard"><div className="pe-2 fs-4"><FaUser /></div><span className="text-nowrap pt-1 fs-4">Dashboard</span></a>
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