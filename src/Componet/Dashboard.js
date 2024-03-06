import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <>
            <div className="container w-100 bg-light p-2 rounded">
                <div className="row p-2">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User Information</h5>

                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td>Test</td>

                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>:</td>
                                            <td>test@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number</td>
                                            <td>:</td>
                                            <td>+91 0000000000</td>
                                        </tr>
                                        <tr>
                                            <td>Pincode</td>
                                            <td>:</td>
                                            <td>000000</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>:</td>
                                            <td>Gurugram</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>:</td>
                                            <td>Hariyana</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Booked Events</h5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Venue</th>
                                            <th scope="col">Booking Date</th>
                                            <th scope="col">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                                            <td>15-jun-2001</td>
                                            <td className='text-center'><a href='#' className='fs-4'><FaMapLocationDot /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                                            <td>15-jun-2001</td>
                                            <td className='text-center'><a href='#' className='fs-4'><FaMapLocationDot /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                                            <td>15-jun-2001</td>
                                            <td className='text-center'><a href='#' className='fs-4'><FaMapLocationDot /></a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard