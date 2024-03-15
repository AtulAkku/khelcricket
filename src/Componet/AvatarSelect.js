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
        <div className='d -flex justify-content-around text-light my-4'>
          {avatars.map((items, index) => (
            <div key={index}>
              {console.log(items.avatarName)}
              <img
                // key={index}
                src={`img/avatars/${items.avatarUrl}`}
                alt={items.avatarNo}
                style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                onClick={() => handleAvatarSelect(items.avatarUrl)}
              />
              {console.log(items.avatarName)}
              <span>{items.avatarName}gsdgfdsg</span>
            </div>
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
