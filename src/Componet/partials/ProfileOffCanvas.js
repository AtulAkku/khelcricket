import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProfileOffCanvas = (props) => {
  // const selectedAvatar = props.selectedAvatar;
  const setDashAvatar = props.setDashAvatar;
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [customAvatar, setCustomAvatar] = useState(null);
  const closeOffcanvas = () => {
    document.getElementById('closeProfileOffCanvas').click();
  };
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
      setDashAvatar(avatarToSave);
      closeOffcanvas();
      toast.success('Avatar changed successfully!', { position: 'top-right' });
    } else {
      alert('Please select or upload an avatar before saving.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div class="offcanvas offcanvas-end bg-nav text-light w-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title ps-4" id="offcanvasExampleLabel">Select an Avatar</h3>
          <button type="button" class="btn-close text-reset" id="closeProfileOffCanvas" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex justify-content-center flex-column">
          {/* <div className='fs-5 text-center'>Select an Avatar or upload a Picture</div> */}
          <div>
            <div className='text-center mx-5 px-5'>
              {avatars.map((items, index) => (
                <img
                  className="img-fluid avat m-3 rounded"
                  key={index}
                  src={items['avatar-url']}
                  alt={items['avatar-number']}
                  onClick={() => handleAvatarSelect(items['avatar-url'])}
                />
              ))}
            </div>
            <div className='fs-6 bg-light w-25 mx-auto p-2 text-dark popins rounded'>
              {selectedAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <span className="fs -4">Selected Avatar</span>
                  <img src={selectedAvatar ||avatars[0]['avatar-url']} className="avat m-1 shadow rounded-circle" alt="Selected Avatar" />
                </div>
              }
            </div>
            <div className="text-center m-3">
              <button className='btn btn-outline-light' onClick={handleSaveAvatar}>
                Save Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOffCanvas;
