import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirecting = () => {
  const nevigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    // Redirect to homepage after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(timer);
      nevigate('/'); 
    }, 5000); 

    return () => clearInterval(timer);
  }, [nevigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '65vh'}}>
      <div className="text-center">
        <h1>Thank you for Joining Us</h1>
        <h4>Redirecting you to homepage in {5 - count} seconds</h4>
        <img src='../../img/cricket-game-game.gif' alt='Loading..' style={{ height: '300px', width: "300px"}} />
      </div>
    </div>
  );
};

export default Redirecting;
