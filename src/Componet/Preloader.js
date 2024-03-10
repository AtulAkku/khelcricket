import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Preloader = () => {
  const nevigate = useNavigate();
  const [count, setCount] = useState(0);

  // Start counting from 0 to 5
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment count every second

    // Redirect to homepage after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(timer);
      nevigate('/login'); // Redirect to homepage
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear interval when component unmounts
    return () => clearInterval(timer);
  }, [nevigate]);

  return (
    <>
    <div className='container bg-white'>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '65vh'}}>
      <div className="text-center">
        <h1>Something went worng</h1>
        <h3>Sorry for the inconvenience, please login first!</h3>
        <h4>Redirecting you to login page in {5 - count} seconds</h4>
        <img src='../../img/balljumpanimation.gif' alt='Loading..' style={{ height: '300px', width: "300px"}} />
      </div>
    </div>
    </div>
    </>
  )
}

export default Preloader