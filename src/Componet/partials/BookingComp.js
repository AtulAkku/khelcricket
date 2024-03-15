import React from 'react'
import { FaEye, FaMapLocationDot } from 'react-icons/fa6'

const BookingComp = (props) => {
    return (
        <>
            <div className=" text-light">
                <div className="h3">Booked Venues</div>
                <hr />
                <div className="container bg-white">
                    <table className="table table-sm table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Venue</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col" className="text-center">Location</th>
                                <th scope="col" className="text-center">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(props.userBookings.length === 0) ?
                                <tr>
                                    <td colSpan='4' className="text-center py-4">
                                        <p>No bookings yet</p>
                                        <p>Don't worry just navigate to <a href="/venues" className="text-decoration-none">Venues</a></p>
                                    </td>
                                </tr>
                                :
                                props.userBookings.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.venueName}</td>
                                        <td>{item.date}</td>
                                        <td className='text-center'><a href={item.link} target="_blank" className='fs-4'><FaMapLocationDot /></a></td>
                                        <td className='text-center'>
                                            <div className="d-flex justify-content-around">
                                                <span className='fs-4 text-warning' title='View' onClick={() => { props.handleVenueModal(item) }}><FaEye /></span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BookingComp