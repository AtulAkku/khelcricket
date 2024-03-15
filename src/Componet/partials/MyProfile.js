import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useAuth } from '../../Utils/AuthContext';

const MyProfile = (props) => {
  console.log(props);
  const [editMode, setEditMode] = useState(false);
  const { user } = useAuth();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    const updatedUser = {
      avatarUrl: props.selectedAvatar,
      city: user.city,
      email: user.email,
      name: user.name,
      password: user.password,
      phoneNo: user.phoneNo,
      pinCode: user.pinCode,
      state: user.state,
    }
    const storedUsers = JSON.parse(localStorage.getItem('users'))
    const filteredUsers = storedUsers.filter(storedUser => !(user.email === storedUser.email))
    const updatedUsers = [...filteredUsers, updatedUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
      <div className=" text- light">
        <div className="h3 text-light">My Profile</div>
        <hr className='text-white' />
        <div className='d-flex flex-column text- white popins bg-light'>
          <div className="m-2">
            <div className='p-2 border-bottom d-flex justify-content-between'>
              <div>
                Personal Information
              </div>
              {editMode ? (
                <div>
                  <button
                    className="btn btn-success btn-sm me-2"
                    title="Save"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    title="Cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-warning btn-sm"
                  title="Edit"
                  onClick={handleEdit}
                >
                  <FaEdit />
                </button>
              )}
            </div>
            <div className="row m-1 py-4">
              <div className='col-12 col-lg-9'>
                <div className='row'>
                  <div className='col-6'>
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control bg-light border-0" id="exampleInputName" name="name" value={user.name} disabled />
                  </div>
                  <div className='col-6'>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control bg-light border-0" id="exampleInputEmail1" name="email" value={user.email} disabled />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <label htmlFor="exampleInputPhoneNo">Phone Number</label>
                    <input type="text" className="form-control bg-light border-0" id="exampleInputPhoneNo" name="phoneNo" value={user.phoneNo} onChange={handleInputChange} disabled />
                  </div>
                  <div className='col-6'>
                    <label htmlFor="exampleInputNickName">Pincode</label>
                    <input type="text" className="form-control bg-light border-0" id="exampleInputNickName" name="nickName" value={user.pinCode} onChange={handleInputChange} disabled />
                  </div>
                </div>
                <div className="row">
                  <div className='col-12 col-lg-6'>
                    <label htmlFor="exampleInputCity">City</label>
                    <input type="text" className="form-control bg-light border-0" id="exampleInputCity" name="city" value={user.city} onChange={handleInputChange} disabled />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <label htmlFor="exampleInputState">State</label>
                    <input type="text" className="form-control bg-light border-0" id="exampleInputState" name="state" value={user.state} onChange={handleInputChange} disabled />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 text-center">
                <img src={`/img/avatars/${props.selectedAvatar}`} className="img-fluid w-50 rounded-circle" alt="Selected Avatar" />
                <p>{props.selectedNickName}</p>
                <a className="text-muted" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  {editMode ? <FaEdit className='profileAvatarEdit fs-3' /> : ''}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
