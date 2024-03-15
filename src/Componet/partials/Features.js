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
                <div className='text-center h1 pb-4'>Spotlights</div>
                <div className='contain er g-0 m-auto' style={{ maxWidth: "1400px" }}>
                    <div className="check">
                        <div class="">
                            <div className="row my-element">
                                <div className="col-12 col-lg-6 border-end border-5 d-flex align-items-center">
                                    <div className='fs-4'>
                                        <div className='pe-5  text-end'>Are you tired of the hassle involved in booking cricket venues?</div>
                                    </div>
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.confuse}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.website}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className='d-flex align-items-center fs-4'>
                                        <div className='ps-5  text-start'>Let our website do all the work for you</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-element">
                                <div className="col-12 col-lg-6 border-end border-5 border-info d-flex align-items-center">
                                    <div className='fs-4'>
                                        <div className='pe-5  text-end'>Search filters to allow users to refine their search based on criteria like location</div>
                                    </div>
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.search}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.booking}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className='d-flex align-items-center fs-4'>
                                        <div className='ps-5  text-start'>Check availability and almost instant booking confirmation</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-element">
                                <div className="col-12 col-lg-6 border-end border-5 d-flex align-items-center">
                                    <div className='fs-4'>
                                        <div className='pe-5  text-end'>Secure Payment Options</div>
                                    </div>
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.secure}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.userFriendly}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className='d-flex align-items-center fs-4'>
                                        <div className='ps-5  text-start'>Intuitive and easy-to-use User Friendly interface with navigation menus</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="w-50 m-auto d-flex align-items-center my-element">
                                <div className="d-flex align-items-center">
                                    <div className='fs-4'>
                                        <div className='p-5  text-end'>Comprehensive Venue Database of different cricket venues</div>
                                    </div>
                                    <div className='p-1'>
                                        <Lottie
                                            options={defaultOptions.database}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features