import React from 'react';


const Error404 = () => {
  return (
    <div className='bg-light px-5'>
      <div className='row'>
        <div className="col col-12 col-lg-6 text-center"><img className="img-fluid w-75 p-5" src="/img/404.png" alt="Error 404" /></div>
        <div className="col col-12 col-lg-6 my-auto p-5">
          <h1 className='text-center display-3 fw-bold'>Oops! Page not found.</h1>
          <div className="text-center">
            <div className="btn btn-outline-warning"><a className="nav-link" href="/">Go back to home</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404