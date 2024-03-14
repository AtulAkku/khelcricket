import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const MyProfile = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || {});
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleEdit = () => {
    setEditMode(true);
    setEditedUser({ ...users[0] });
  };

  const handleSave = () => {
    setUsers(prevUsers => ({
      ...prevUsers,
      0: { ...editedUser }
    }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedUser({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <>
      <div className='d-flex flex-column text- white popins bg-light'>
        <div className="w-50 shadow m-2">
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
          <div className="row m-1">
            <div className='col'>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control bg-light" id="exampleInputEmail1" name="email" value={editMode ? editedUser.email || '' : users[0].email || ''} onChange={handleInputChange} disabled />
            </div>
            <div className='col'>
              <label htmlFor="exampleInputName">Name</label>
              <input type="text" className="form-control bg-light" id="exampleInputName" name="name" value={editMode ? editedUser.name || '' : users[0].name || ''} onChange={handleInputChange} disabled={!editMode} />
            </div>
          </div>
          <div className="row m-1">
            <div className='col'>
              <label htmlFor="exampleInputPhoneNo">Phone Number</label>
              <input type="number" className="form-control bg-light" id="exampleInputPhoneNo" name="phoneNo" value={editMode ? editedUser.phoneNo || '' : users[0].phoneNo || ''} onChange={handleInputChange} disabled={!editMode} />
            </div>
            <div className="col"></div>
          </div>
          <div className='p-2 border-bottom border-top my-3'>
            <div>
              Address
            </div>
          </div>
          <div className="row m-1">
            <div className='col'>
              <label htmlFor="exampleInputCity">City</label>
              <input type="text" className="form-control bg-light" id="exampleInputCity" name="city" value={editMode ? editedUser.city || '' : users[0].city || ''} onChange={handleInputChange} disabled={!editMode} />
            </div>
            <div className='col'>
              <label htmlFor="exampleInputState">State</label>
              <input type="text" className="form-control bg-light" id="exampleInputState" name="state" value={editMode ? editedUser.state || '' : users[0].state || ''} onChange={handleInputChange} disabled={!editMode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
