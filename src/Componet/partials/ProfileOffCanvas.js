import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProfileOffCanvas = (props) => {
  // const selectedAvatar = props.selectedAvatar;
  const setDashAvatar = props.setDashAvatar;
  const [selectedAvatar, setSelectedAvatar] = useState(props.selectedAvatar);
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
      "avatarNo": "1",
      "avatarUrl": "avatar1.png",
      "avatarName": "Max"
    },
    {
      "avatarNo": "2",
      "avatarUrl": "avatar2.png",
      "avatarName": "Tanjiro"
    },
    {
      "avatarNo": "3",
      "avatarUrl": "avatar3.png",
      "avatarName": "Snake"
    },
    {
      "avatarNo": "4",
      "avatarUrl": "avatar4.png",
      "avatarName": "Doraemon"
    },
    {
      "avatarNo": "5",
      "avatarUrl": "avatar5.png",
      "avatarName": "Nancy"
    },
    {
      "avatarNo": "6",
      "avatarUrl": "avatar6.png",
      "avatarName": "Aqua"
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
      <div className= "offcanvas offcanvas-end bg-nav text-light w-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className= "offcanvas-header">
          <h3 className= "offcanvas-title ps-4" id="offcanvasExampleLabel">Select an Avatar</h3>
          <button type="button" className= "btn-close text-reset" id="closeProfileOffCanvas" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className= "offcanvas-body d-flex justify-content-center flex-column">
          {/* <div className='fs-5 text-center'>Select an Avatar or upload a Picture</div> */}
          <div>
            <div className='text-center mx-5 px-5 d-flex'>
              {avatars.map((items, index) => (
                <div className=''>
                <img
                  className="img-fluid avat m-3 rounded"
                  key={index}
                  src={`img/avatars/${items.avatarUrl}`}
                  alt={items.avatarName}
                  onClick={() => handleAvatarSelect(items.avatarUrl)}
                />
                <p>{items.avatarName}</p>
                </div>
              ))}
            </div>
            <div className='fs-6 bg-light w-25 mx-auto p-2 text-dark popins rounded'>
              {selectedAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <span className="fs -4">Selected Avatar</span>
                  <img src={`${selectedAvatar ||avatars[0].items.avatarUrl}`} className="avat m-1 shadow rounded-circle" alt="Selected Avatar" />
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
