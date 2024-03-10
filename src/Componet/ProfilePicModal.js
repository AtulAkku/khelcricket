import React, { useState } from 'react';

const ProfilePicModal = (props) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
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
      alert('Avatar saved successfully!');
      props.onClose();
    } else {
      alert('Please select or upload an avatar before saving.');
    }
  };

  return (
    <div className={`modal ${selectedAvatar || customAvatar ? 'show' : ''}`} style={{ display: props.showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title">Change Profile Picture/Avatar</h5>
            <button type="button" class="close btn fw-bold" onClick={props.onClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-3">
            <div >
              <div className='fs-5 text-center'>Select an Avatar</div>
              <div className='text-center'>
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
            <div className='fs-2'>
              {selectedAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <img src={selectedAvatar} className="avat" alt="Selected Avatar" />
                  <span className="fs-4">Selected Avatar</span>
                </div>
              }
            </div>
            <div className='d-flex flex-column align-items-center'>
              <div className='fs-5'>Or Upload Custom Picture</div>
              <input className="btn bg-nav" type="file" accept="image/*" onChange={handleCustomAvatarUpload} />
              {customAvatar &&
                <div className="d-flex flex-column align-items-center">
                  <img src={customAvatar} className="avat" alt="Selected Avatar" />
                  <span className="fs-4">Selected Avatar</span>
                </div>
              }
            </div>
            <div className="text-center"><button className='btn bg-nav text-light' onClick={handleSaveAvatar}>
              Save Profile Picture
            </button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicModal;
