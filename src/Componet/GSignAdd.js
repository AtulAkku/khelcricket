import React, { useState } from 'react'
import { validateRequired, validatePhone, validatePinCode} from '../Utils/FormValidation';
import { toast, ToastContainer } from 'react-toastify';
import jsonData from '../Utils/pincode.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';

const GSignAdd = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const navigate = useNavigate();
    const location = useLocation();
    const { email, name, message } = location.state;
    const [phoneNo, setPhoneNo] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const {logIn} = useAuth();
    const validateForm = () => {
        const requiredFields = ['phoneNo', 'pinCode'];
        const phoneInput = document.getElementById('phoneNo');
        const pinCodeInput = document.getElementById('pinCode');
        requiredFields.forEach(field => {
            validateRequired(field);
        });
        validatePhone(phoneInput, phoneInput.value);
        validatePinCode(pinCodeInput, parseInt(pinCodeInput.value));
        return document.querySelector('.is-invalid') === null;
    }

    const searchCity = (e) => {
        const newPincode = e.target.value;
        setPinCode(newPincode);

        const matchingEntry = jsonData.find(entry => entry.pincode === parseInt(newPincode));
        if (matchingEntry) {
            console.log(matchingEntry.Taluk);
            setCity(matchingEntry.Taluk)
            setState(matchingEntry.statename);
        } else {
            setCity('');
            setState('');
        }
    }
    const Register = async (e) => {
        console.log('in register');
        e.preventDefault();
        const isValid = validateForm();
        console.log('outside valdiate');
        if (storedUsers.find((user) => user.email === email)) {
            toast.error('Account already exists! Please Login', {
                position: 'top-right',
            });
            return;
        }
        if (isValid) {
            console.log('in isvalid');
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const newUser = { email, name, phoneNo, pinCode, city, state, avatarUrl : 'defaultAvtar.png' };
            const updatedUsers = [...storedUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            logIn(newUser, true);
            navigate('/', {state:{newUser}})
        } else {
            toast.error('Form Fields are invalid', {
                position: 'top-right',
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="container text-light">
                <div className='col-5'><img className='img-fluid' src='./img/cricketer2.png' alt='' /></div>
                <div className='col-7 d-flex align-item-center flex-column justify-content-center p-2'>
                    <div className='text-center' >
                        <p className="h3">Welcome {name}!</p>
                        <p className='h5'>{message}</p>
                    </div>
                    <form className="g-0 p-3">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="ms-1" htmlFor="phoneNo">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNo" placeholder="Phone Number" value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} />
                                <div id="phoneNoVerify"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="ms-1" htmlFor="pinCode">Pin Code</label>
                                <input type="text" className="form-control" id="pinCode" placeholder="Pin Code" value={pinCode} onChange={searchCity} /> <div id="pinCodeVerify"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="ms-1" htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" placeholder="City" value={city} readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="ms-1" htmlFor="state">State</label>
                                <input id="state" className="form-control" value={state} readOnly />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-4">
                            <button type="button" className="btn btn-outline-light px-5" onClick={Register}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GSignAdd