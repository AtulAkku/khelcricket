import React, { useEffect } from 'react'
import Lottie from 'react-lottie';
import Confuse from '../animations/confuse.json';
import Booking from '../animations/booking.json';
import Calender from '../animations/calenderlook2.json';
import Check from '../animations/checkanimation.json';
import Database from '../animations/database.json';
import Search from '../animations/searchLocation.json';
import Secure from '../animations/secure-payment.json';
import UserFriendly from '../animations/userfriendly1.json';
import Website from '../animations/website.json';

const Features = () => {
    const defaultOptions = {
        confuse: {
            loop: true,
            autoplay: true,
            animationData: Confuse,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        booking: {
            loop: true,
            autoplay: true,
            animationData: Booking,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        website: {
            loop: true,
            autoplay: true,
            animationData: Website,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        check: {
            loop: true,
            autoplay: true,
            animationData: Check,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        calender: {
            loop: true,
            autoplay: true,
            animationData: Calender,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        database: {
            loop: true,
            autoplay: true,
            animationData: Database,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        search: {
            loop: true,
            autoplay: true,
            animationData: Search,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        secure: {
            loop: true,
            autoplay: true,
            animationData: Secure,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        },
        userFriendly: {
            loop: true,
            autoplay: true,
            animationData: UserFriendly,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",

            }
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.my-element').forEach(element => {
            observer.observe(element);
        });
        return () => {
            observer.disconnect();
        };

    }, []);
    return (
        <>
            <div className="bg-white my-3 py-5 popins g-0">
                <div className='text-center h1 pb-4'>What We ‘Deliver’</div>
                <div className='contain er g-0 m-auto' style={{ maxWidth: "1400px" }}>
                    <div className="check">
                        <div class="my-element">
                            <div className="row">
                                <div className="col-12 col-lg-6 border-end border-5">
                                    <Lottie
                                        options={defaultOptions.confuse}
                                        height={400}
                                        width={400}
                                    />
                                </div>
                                <div className='col-12 col-lg-6 d-flex align-items-center fs-2 py-5'>
                                    <div className='ps-5 m-5'>Are you tired of the hassle involved in booking cricket venues?</div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="my-element">
                        <div className="row">
                            <div className='col-12 col-lg-6 d-flex border-end border-5 border-info align-items-center justif y-content-end text-end fs-2 p-5'>
                                <div className="ps-5 m-5">Let our website do all the work for you with</div>
                            </div>
                            <div className="col-12 col-lg-6 border-5 text-start">
                                <Lottie
                                    options={defaultOptions.website}
                                    height={400}
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-element">
                        <div className="row">
                            <div className="col-12 col-lg-6 border-end border-5">
                                <Lottie
                                    options={defaultOptions.search}
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <div className='col-12 col-lg-6 d-flex align-items-center fs-2'>
                                <div className='ps-5 m-5'>Search filters to allow users to refine their search based on criteria like location</div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-element">
                        <div className="row">
                            <div className='col-12 col-lg-6 d-flex border-end border-5 border-info align-items-center justif y-content-end text-end fs-2 p-5'>
                                <div className="ps-5 m-5">Check availability and almost instant booking confirmation</div>
                            </div>
                            <div className="col-12 col-lg-6 border-5 text-start">
                                <Lottie
                                    options={defaultOptions.booking}
                                    height={400}
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-element">

                        <div className="row">
                            <div className="col-12 col-lg-6 border-end border-5">
                                <Lottie
                                    options={defaultOptions.secure}
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <div className='col-12 col-lg-6 d-flex align-items-center fs-2'>
                                <div className='ps-5 m-5'>Secure Payment Option</div>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-element">

                        <div className="row">
                            <div className='col-12 col-lg-6 d-flex border-end border-5 border-info align-items-center justif y-content-end text-end fs-2 p-5'>
                                <div className="ps-5 m-5">Intuitive and easy-to-use User Friendly interface with navigation menus</div>
                            </div>
                            <div className="col-12 col-lg-6 border-5 text-start">
                                <Lottie
                                    options={defaultOptions.userFriendly}
                                    height={400}
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-element">

                        <div className="row">
                            <div className="col-12 col-lg-6 border-end border-5">
                                <Lottie
                                    options={defaultOptions.database}
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <div className='col-12 col-lg-6 d-flex align-items-center fs-2'>
                                <div className='ps-5 m-5'>Comprehensive Venue Database of different cricket venues</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features