import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useAuth } from '../../Utils/AuthContext';

const MyProfile = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { user } = useAuth();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
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
              <div className='col-12 col-lg-6'>
                <div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control bg-light" id="exampleInputEmail1" name="email" value={user.email} onChange={handleInputChange} disabled />
                </div>
                <div className=''>
                <label htmlFor="exampleInputName">Name</label>
                <input type="text" className="form-control bg-light" id="exampleInputName" name="name" value={user.name} onChange={handleInputChange} disabled={!editMode} />
              </div>
              <div className=''>
                <label htmlFor="exampleInputPhoneNo">Phone Number</label>
                <input type="text" className="form-control bg-light" id="exampleInputPhoneNo" name="phoneNo" value={user.phoneNo} onChange={handleInputChange} disabled={!editMode} />
              </div>
              </div>
              <div className="col-12 col-lg-6 d-">
                <img src={`/img/avatars/${user.avatarUrl}`} className="img-fluid w-50 rounded-circle" alt="Selected Avatar" />
                <a className="text-muted" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  Change Avatar <FaEdit />
                </a>
              </div>
            </div>
            <div className='p-2 border-bottom my-3'>
              <div>
                Address
              </div>
            </div>
            <div className="row m-1 py-4">
              <div className='col-12 col-lg-6'>
                <label htmlFor="exampleInputCity">City</label>
                <input type="text" className="form-control bg-light" id="exampleInputCity" name="city" value={user.city} onChange={handleInputChange} disabled={!editMode} />
              </div>
              <div className='col-12 col-lg-6'>
                <label htmlFor="exampleInputState">State</label>
                <input type="text" className="form-control bg-light" id="exampleInputState" name="state" value={user.state} onChange={handleInputChange} disabled={!editMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
