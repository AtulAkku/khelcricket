import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { ToastContainer } from 'react-toastify';

const VenueModal = (props) => {
  return (
    <>
      <ToastContainer />
      <div className={`modal bg-dark bg-opacity-50 fade ${props.showVenueModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.showVenueModal ? 'block' : 'none' }} >
        <div className="modal-dialog modal-dialog-centered modal-lg text-light popins" role="document">
          <div className="modal-content shadow border-0 bg-nav">
            <div className="modal-body">
              <div className="py-2 d-flex justify-content-between">
                <h5 className="">Booking Details</h5>
                <button type="button" className="close btn btn-outline-light fw-bold" onClick={props.closeVenueModal} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="row d-flex align-items-center ">
                <div className="col col-lg-6 col-12">
                  <img className="img-fluid" src={`img/location/${props.viewBooking.image}`} alt="" />
                </div>
                <div className="col col-lg-6 col-12 text-center">
                  <div className='d-flex flex-column align-items-center'>
                    <span className="fs-4">{props.viewBooking.venueName}</span>
                    {/* <span className="fs-3"><a href={props.viewBooking.link} target="_blank"><FaLocationDot /></a></span> */}
                    <span className="fs-6 mt-2"><a href={props.viewBooking.link} target="_blank" className="me-2"><FaLocationDot /></a>{props.viewBooking.location}</span>
                    <span className="fs-5 mt-2">Booking Date</span>
                    <span className="fs-3">{props.viewBooking.date}</span>
                    {/* <button type="button" className="btn btn-outline-light mt-2 px-5" onClick={props.closeVenueModal}>OK</button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-nav">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VenueModal