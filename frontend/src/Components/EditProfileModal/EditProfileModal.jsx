import React, { useState } from "react";
import "./EditProfileModal.css";

function EditProfileModal({ profile, closeDialog, onUpdateProfile }) {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    closeDialog();
  };

  return (
    <div className="dialog-backdrop">
      <div className="edit-profile-modal">
        <div className="modal-header">
          <h3>Edit Profile</h3>
          <button className="close-modal" onClick={closeDialog}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Username"
            />
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              rows={4}
              onChange={handleChange}
              placeholder="Additional Info"
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
