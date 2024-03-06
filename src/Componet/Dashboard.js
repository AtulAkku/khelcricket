import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { useAuth } from '../Utils/AuthContext';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logOut, isGUser } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = ()=>{
        logOut();
        navigate('/')
    }
    return (
        <>
            <div className="container w-100 bg-light rounded m-3 mx-auto">
                <div className="row p-2">
                    <div className="col-sm-5 py-5 px-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center pb-3">{user.name}</h5>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>:</td>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number</td>
                                            <td>:</td>
                                            <td>{user.phoneNo}</td>
                                        </tr>
                                        <tr>
                                            <td>Pincode</td>
                                            <td>:</td>
                                            <td>{user.pinCode}</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>:</td>
                                            <td>{user.city}</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>:</td>
                                            <td>{user.state}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button type="button" className="btn bg-nav px-5 fs-6" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </div>
                    <div className="col-sm-7 py-5 px-2 d-flex justify-content-center">
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