import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const VenueModal = (props) => {
  console.log(props.viewBooking);
  return (
    <>
      <ToastContainer />
      <div className={`modal bg-dark bg-opacity-50 fade ${props.showVenueModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.showVenueModal ? 'block' : 'none' }} >
        <div className="modal-dialog modal-dialog-centered modal-lg text-light popins" role="document">
          <div className="modal-content shadow border-0 bg-nav">
            <div className="modal-header d-flex justify-content-between bg-nav">
              <h5 className="modal-title">Booking Details</h5>
              <button type="button" className="close btn btn-outline-light fw-bold" onClick={props.closeVenueModal} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row d-flex align-items-center ">
                <div className="col col-lg-6 col-12">
                  <img className="img-fluid" src={`img/location/${props.viewBooking.image}`} alt="" />
                </div>
                <div className="col col-lg-6 col-12 text-center">
                  <p className="fs-2">{props.viewBooking.venueName}</p>
                  <p className="fs-4"><a href={props.viewBooking.link} target="_blank"><FaLocationDot /></a></p>
                  <p className="fs-4">{props.viewBooking.location}</p>
                    <p className="fs-5">Booking Date</p>
                    <p className="fs-4">{props.viewBooking.date}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-nav">
              <button type="button" className="btn btn-outline-light" onClick={props.closeVenueModal}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VenueModal