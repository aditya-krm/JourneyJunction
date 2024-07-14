import React from "react";
import { useState } from "react";
import "./Profile.css";
import ProfileComponent from "../../Components/ProfileComponent/ProfileComponent";
import Recommend from "../../Components/Recommend/Recommend";
import EditProfileModal from "../../Components/EditProfileModal/EditProfileModal";

import ProfileData from "../../test/testProfile";

function Profile() {
  const [profile, setProfile] = useState(ProfileData);

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = (updatedProfile) => {
    setProfile({ ...profile, ...updatedProfile });
  };

  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="profilePage">
      <ProfileComponent {...profile} openEditModal={openEditModal} />
      {isEditing && (
        <EditProfileModal
          profile={profile}
          closeDialog={closeEditModal}
          onUpdateProfile={handleUpdateProfile}
        />
      )}
      <Recommend />
    </div>
  );
}

export default Profile;
