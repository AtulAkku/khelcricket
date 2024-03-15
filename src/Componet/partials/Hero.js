import React from 'react'
import './Card.css'
import { FaLocationDot } from 'react-icons/fa6'

const Hero = ({ data }) => {
    return (
        <>
            <div className="p-5">
                <p className="text-center p-2 text-white fs-1"><div className="text -success text-opacity-75"><FaLocationDot /></div><span className='pt-3'>Prime Locations</span></p>
                <div className="hero-container">
                    <div className="container">
                        {data.map((item, index) => (
                            <div className="card1" key={index}>
                                <div className="image">
                                    <img src={item['image-url']} alt={item.name} />
                                </div>
                                <div className="content">
                                    <h3>{item.name}</h3>
                                    <FaLocationDot />
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row popins">
                <div className="col-12 col-lg-6 bg-white justify-content-center d-flex align-items-center text-end fs-1">
                    <div className="ps-5">Experience the future of cricket venue bookings at KHEl!</div>
                </div>
                <div className="col-12 col-lg-6 bg-light d-flex justify-content-center p-3">
                    <div className='learnworlds-laptop black realistic'>
                        <div className='lw-screen-content d-flex justify-content-center'>
                            <video src='video/KHEL.mp4' className='rounded shadow align-items-center' width="65%" controls autoPlay ></video>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero