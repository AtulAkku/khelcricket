import React from 'react'
import './Card.css'
import { FaLocationDot } from 'react-icons/fa6'

const Hero = ({ data }) => {
    return (
        <>
            <div className="p-5">
                <p className="text-center p-2 text-white fs-1"><div className="text -success text-opacity-75"><FaLocationDot /></div><span className='pt-3'>Prime Locations</span></p>
                <div className="hero-container">
                    <div class="container">
                        {data.map((item, index) => (
                            <div class="card1" key={index}>
                                <div class="image">
                                    <img src={item['image-url']} alt={item.name} />
                                </div>
                                <div class="content">
                                    <h3>{item.name}</h3>
                                    <FaLocationDot />
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-100 bg-light d-flex justify-content-center p-3">
                    <video src='video/KHEL.mp4' className='rounded shadow' width="60%" controls ></video>
            </div>
        </>
    )
}

export default Hero