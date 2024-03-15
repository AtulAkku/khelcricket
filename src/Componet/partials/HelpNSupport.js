import React from 'react';

const HelpNSupport = () => {
    return (
        <>
            <div className="text- light">
                <div className="h3 text-light">Help & Support</div>
                <hr className='text-white' />
                <div className='d-flex flex-column text- white popins bg-light'>
                    <div className="m-2">
                        <div className='p-2 d-flex justify-content-between flex-column'>
                            <h5 className='ca rd-title'>Contact Information</h5>
                            <p className='car d-text'>For any inquiries or assistance, please feel free to reach out to our support team.</p>
                            <div className="container bg-white">
                                <div className="col-8">
                                <table className="table table-sm table-hover">
                                    <tbody>
                                        <tr>
                                            <td>E-mail</td>
                                            <td>:</td>
                                            <td>rambhai@khel.in</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>:</td>
                                            <td>+91 9876543219</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>:</td>
                                            <td>H-65 Sector-63 Near Noida Electronic City Metro Station</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="col-4 cc e bg-black mx-auto rounded-circle shadow">
                                    <img src="img/rambhai.png" className="rounded-circle img-fluid shadow" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HelpNSupport;
