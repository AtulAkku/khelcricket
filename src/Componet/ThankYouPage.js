import React from 'react'
import { useLocation } from 'react-router-dom'

const ThankYouPage = () => {
    const location = useLocation();
    const { message, btnText, link } = location.state;
    return (
        <>
            <div className="bg-white">
                <div className="text-center d-flex flex-column align-items-center p-4">
                    <h1 className='mb-2 gazpacho'>{message}</h1>
                    <img src='img/batballanimation.gif' alt='Loding...' style={{ height: '300px', width: "300px" }} />
                    <a className="nav-link my-2" href={link}>
                        <div className="btn btn-outline-dark my-3">
                            {btnText}
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ThankYouPage