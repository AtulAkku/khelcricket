import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProfilePicModal = (props) => {
  const selectedAvatar = props.selectedAvatar;
  const setSelectedAvatar = props.setSelectedAvatar;
  const [customAvatar, setCustomAvatar] = useState(null);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setCustomAvatar(null);
  };

  const handleCustomAvatarUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCustomAvatar(reader.result);
      setSelectedAvatar(null);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const avatars = [
    {
      "avatar-number": "1",
      "avatar-url": "../../img/avatars/avatar1.png",
    },
    {
      "avatar-number": "2",
      "avatar-url": "../../img/avatars/avatar2.png",
    },
    {
      "avatar-number": "3",
      "avatar-url": "../../img/avatars/avatar3.png"
    },
    {
      "avatar-number": "4",
      "avatar-url": "../../img/avatars/avatar4.png"
    },
    {
      "avatar-number": "5",
      "avatar-url": "../../img/avatars/avatar5.png"
    },
    {
      "avatar-number": "6",
      "avatar-url": "../../img/avatars/avatar6.png"
    }
    // ... other avatars
  ];

  const handleSaveAvatar = () => {
    if (selectedAvatar || customAvatar) {
      const avatarToSave = selectedAvatar || customAvatar;
      localStorage.setItem('selectedAvatar', avatarToSave);
      toast.success('Avatar changed successfully!', { position: 'top-right' });
      // props.onClose();
    } else {
      alert('Please select or upload an avatar before saving.');
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className={`modal ${selectedAvatar || customAvatar ? 'show' : ''}`} style={{ display: props.showModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div class="modal-header d-flex justify-content-between bg-nav">
            <h5 class="modal-title">Change Profile Picture/Avatar</h5>
            <button type="button" class="close btn btn-outline-light fw-bold" onClick={props.onClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-3">
            <div >
              <div className='fs-5 text-center'>Select an Avatar or upload a Picture</div>
              <div className='text-center p-1 rounded shadow bg-white'>
                {avatars.map((items, index) => (
                  <img
                    className="img-fluid avat"
                    key={index}
                    src={items['avatar-url']}
                    alt={items['avatar-number']}
                    onClick={() => handleAvatarSelect(items['avatar-url'])}
                  />
                ))}
              </div>
            </div>
            <div className='fs-6'>
              {selectedAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <img src={selectedAvatar} className="avat m-1 shadow rounded" alt="Selected Avatar" />
                  <span className="fs -4">Selected Avatar</span>
                </div>
              }
            </div>
            {/* <div className='d-flex flex-column align-items-center mx-5'>
              <input className="form-control m-2" type="file" accept="image/*" onChange={handleCustomAvatarUpload} /> */}
              {/* {customAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <img src={customAvatar} className="avat shadow rounded" alt="Selected Avatar" />
                  <span className="fs-6">Selected Avatar</span>
                </div>
              } */}
            {/* </div> */}
            
          </div>
          <div className="modal-footer bg-nav">
              <button className='btn btn-outline-light' onClick={handleSaveAvatar}>
                Save Profile Picture
              </button>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePicModal;
