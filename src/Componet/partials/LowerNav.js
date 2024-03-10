import React from 'react'
import { useAuth } from '../../Utils/AuthContext'

const LowerNav = () => {
    const { user, isAuth } = useAuth();
    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col px-5 py-2 pb-4 text-center">
                        <div className="card shadow">
                            <img className="card-img-top mx-auto" src="./img/cricketpng.png" alt="Card cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around p-3">
                                    {
                                        isAuth ?
                                            <p className="h4">Welcome {user.name} !</p> :
                                            <>
                                                <a href="/login" className="btn bg-nav btn -warning px-5">Log In</a>
                                                <a href="/signup" className="btn btn-dark px-5">Sign Up</a>
                                            </>
                                    }
                                </div>
                                <h5 className="card-title text-center">Discover your perfect venue with our comprehensive search solution !</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col text-white text-shadow d-flex align-items-center ">
                        <div>
                            <h1>KHEL Cricket Concierge</h1>
                            <p>The sound of leather on willow is music to ears !</p>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Find Venues" aria-label="Search" />
                                <div className="d-flex justify-content-end p-3"><button className="btn btn-outline-light" type="submit">Search</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="welcome-container">
                    <div className="welcome-message shadow">Welcome to <span className="highlight">KHEL Cricket Concierge</span> Website!</div>
                </div> */}
            </div>
        </>
    )
}

export default LowerNav