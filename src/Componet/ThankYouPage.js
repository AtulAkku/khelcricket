import React from 'react'

const ThankYouPage = () => {
    return (
        <>
            <div className="" style={{ height: '65vh', backgroundColor: 'white' }}>
                <div className="text-center d-flex flex-column align-items-center p-4">
                    <h1 className='mb-2 gazpacho'>Thank you for signing up</h1>
                    <img src='img/batballanimation.gif' alt='Loding...' style={{ height: '300px', width: "300px" }} />
                    <a className="nav-link my-2" href="/login">
                        <div className="btn btn-outline-dark my-3">
                            Click here for Login</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ThankYouPage