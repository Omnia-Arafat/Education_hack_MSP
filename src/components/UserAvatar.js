import React, { useState } from 'react';

function UserAvatar(props) {
  const { imageUrl, onImageChange } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        onImageChange(reader.result);
      };
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="useravatar" data-sign="avatar" onClick={toggleEdit}>
      {isEditing ? (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      ) : (
        <img src={selectedImage} alt="" />
      )}
    </div>
  );
}

export default UserAvatar;
