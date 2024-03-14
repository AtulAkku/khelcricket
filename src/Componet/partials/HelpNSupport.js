import React from 'react';

const HelpNSupport = () => {
    return (
        <div className='text-white popins'>
            <h2 className='text-center mt-5 mb-4'>Help and Support</h2>

            {/* Contact Information */}
            <div className='row justify-content-center align-items-center w-100'>
                <div className='col'>
                    <div className='card mb-4'>
                        <div className='card-body'>
                            <h5 className='card-title'>Contact Information</h5>
                            <p className='card-text'>For any inquiries or assistance, please feel free to reach out to our support team.</p>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <strong>Email:</strong> rambhai@khel.com
                                </li>
                                <li className='list-group-item'>
                                    <strong>Phone:</strong> +91 9876543219
                                </li>
                                <li className='list-group-item'>
                                    <strong>Address:</strong> H-65 Sector-63 Near Noida Electronic City Metro Station
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Submit a Query</h5>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='inputName' className='form-label'>Name</label>
                                    <input type='text' className='form-control' id='inputName' placeholder='Your Name' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='inputEmail' className='form-label'>Email</label>
                                    <input type='email' className='form-control' id='inputEmail' placeholder='Your email address' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='inputQuery' className='form-label'>Query</label>
                                    <textarea className='form-control' id='inputQuery' rows='3' placeholder='Type your query here'></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpNSupport;
