import React, { useState } from 'react';

const AvatarSelector = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [customAvatar, setCustomAvatar] = useState(null);

  // Function to handle avatar selection
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setCustomAvatar(null); // Reset custom avatar if selected
  };

  // Function to handle custom avatar upload
  const handleCustomAvatarUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCustomAvatar(reader.result);
      setSelectedAvatar(null); // Reset selected avatar if custom avatar uploaded
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
      "avatar-number":"3",
      "avatar-url":"../../img/avatars/avatar3.png"
    },
    {
      "avatar-number":"4",
      "avatar-url":"../../img/avatars/avatar4.png"
    },
    {
      "avatar-number":"5",
      "avatar-url":"../../img/avatars/avatar5.png"
    },
    {
      "avatar-number":"6",
      "avatar-url":"../../img/avatars/avatar6.png"
    }
    // ... other avatars
  ];

  // Function to save selected avatar to local storage
  const handleSaveAvatar = () => {
    if (selectedAvatar || customAvatar) {
      const avatarToSave = selectedAvatar || customAvatar;
      localStorage.setItem('selectedAvatar', avatarToSave);
      alert('Avatar saved successfully!');
    } else {
      alert('Please select or upload an avatar before saving.');
    }
  };

  return (
    <div className='container bg-white rounded mt-2 p-4 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='gazpacho'>Profile Picture</h1>
      <div>
        <h2 className='my-4 gazpacho'>Select an Avatar:</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }} className='my-4'>
          {avatars.map((items, index) => (
            <img
              key={index}
              src={items['avatar-url']}
              alt={items['avatar-number']}
              style={{ width: '150px', height: '150px', cursor: 'pointer' }}
              onClick={() => handleAvatarSelect(items['avatar-url'])}
            />
          ))}
        </div>
      </div>
      <h2 className='my-4'>Upload Custom Picture:</h2>
      <div className='mb-5'>
        <input type="file" accept="image/*" onChange={handleCustomAvatarUpload} />
        {customAvatar && (
          <img src={customAvatar} alt="Custom Avatar" style={{ width: '150px', height: '150px', marginTop: '10px' }} />
        )}
      </div>

      <h2 className='my-2'>Selected Avatar:</h2>
      <div>
        {selectedAvatar && <img src={selectedAvatar} alt="Selected Avatar" style={{ width: '150px', height: '150px' }} />}
      </div>

      {/* Save button */}
      <button className='btn btn-primary my-4' onClick={handleSaveAvatar}>
        Save Profile Picture
      </button>
    </div>
  );
};

export default AvatarSelector;
