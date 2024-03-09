import React from 'react'

const VenueDetails = () => {
  return (
    <>
      <div className="container p-4 g-0 shadow mx-auto my-4 bg-light rounded row ">
        <div className='col' ><img className='img-fluid rounded' src='../../img/location/mcc.png' alt='' /></div>
        <div className='col d-flex align-item-center flex-column justify-content-center p-2'>
          <div className='text-center h1 m-0 p-3 rounded' >Venue Details</div>
          <h5 className="card-title text-center">Card title</h5>
          <p>Description:</p>
                  <p className="card-text text-center">Location: Gurugram</p>
          <form className='p-3'>
            <div className="form-group">
            <label htmlFor="title">Select Date</label>
            <input type="date" className="form-control" id="dueDate" /*min={today}*/ onChange={(e) => { /*setDueDate(e.target.value)*/ }} />
          </div>
            <div className="d-flex justify-content-center mt-2">
              <button type="button" className="btn bg-nav px-5 fs-6">Check availability!</button>
              <button type="button" className="btn bg-nav px-5 fs-6">Book Now!</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default VenueDetails