import React, { useState, useEffect } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { useAuth } from '../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfilePicModal from './ProfilePicModal';


const Dashboard = () => {
    const { user, logOut, isAuth} = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        navigate('/')
    }
    const handleOpenModal = () => {
        setShowModal(true);
        console.log("open modal run")
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    useEffect(() => {
        if(!isAuth){
            console.log(isAuth);
            navigate('/')
        }
        // const storedAvatar = localStorage.getItem('selectedAvatar');
        // if (storedAvatar) {
        //     setSelectedAvatar(storedAvatar);
        // }
    }, [navigate, isAuth]);
    return (
        <>
            <div className="container w-100 bg-light rounded m-3 mx-auto">
                <div className="row p-2">
                    <div className="col-sm-5 py-5 px-2">
                        <div className="card">
                            <div className="card-body">
                                <div className='w-100 d-flex 
                                flex-column justify-content-center align-items-center'>
                                    {selectedAvatar && <img src={selectedAvatar} alt="Selected Avatar" style={{ width: '150px', height: '150px' }} />}
                                    <button className='btn btn-primary my-4' onClick={handleOpenModal}>
                                        Change Profile Picture
                                    </button>
                                    {showModal && <ProfilePicModal onClose={handleCloseModal} showModal={showModal} />}
                                </div>
                                <h5 className="card-title text-center py-3">{user.name}</h5>
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
                                <table className="table">
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
                                            <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                                            <td>15-jun-2001</td>
                                            <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
                                        </tr>
                                        <tr>
                                            <td>Mohan Cricket Ground, Kadarpur, Gurugram</td>
                                            <td>15-jun-2001</td>
                                            <td className='text-center'><a href='/' className='fs-4'><FaMapLocationDot /></a></td>
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