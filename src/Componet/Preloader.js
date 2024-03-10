import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Preloader = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      navigate('/login');
    }, 5000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <div className='container shadow rounded-top mt-2 bg-white'>
        <div className="row">
        <div className="col col-12 col-lg-6 text-center">
              <img className="w-75 img-fluid" src='img/balljumpanimation.gif' alt='Loading..' />
          </div>
          <div className="col col-12 col-lg-6 my-auto">
            <div className="text-center p-2">
              <h1>Something went Wrong!</h1>
              <p className="text-muted">Redirecting you to Login page in {5 - count} seconds</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Preloader