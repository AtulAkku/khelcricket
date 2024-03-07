import React from 'react'
import { BiCurrentLocation, BiLocationPlus, BiSolidEditLocation } from 'react-icons/bi'
import { FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'

const Hero = ({data}) => {
    return (
        <>
            <div className="mx -3 mt-2 p-5">
                <p className="text-center pb-5 text-white fs-1 shadow"><div className="text-success text-opacity-75"><FaLocationDot /></div><span className='pt-3'>Prime Locations</span></p>
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card shadow border-0 bg-transparent text-white" >
                                <img src={item['image-url']} className="card-img-top" alt={item.description} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero