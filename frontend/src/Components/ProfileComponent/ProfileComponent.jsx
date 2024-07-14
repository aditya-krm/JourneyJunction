import React from "react";
import ProfileTabs from "../ProfileTabs/ProfileTabs";
import "./ProfileComponent.css";

function ProfileComponent({
  coverImg,
  profileImg,
  name,
  userName,
  bio,
  dob,
  joined,
  followers,
  following,
  additionalInfo,
  isFollowing,
  isMyProfile,
  openEditModal,
}) {
  return (
    <div className="profile-container">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <img
          src={profileImg}
          alt={`${name}'s profile`}
          className="profile-image"
        />
        <div className="profile-actions">
          {!isMyProfile ? (
            <button className="follow-button">
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          ) : (
            <button className="edit-button" onClick={openEditModal}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div className="profile-details">
        <h1>{name}</h1>
        <p className="username">@{userName}</p>
        <p className="bio">{bio}</p>
        <p className="additional-info">{additionalInfo}</p>
        <div className="stats">
          <span>{following} Following</span>
          <span>{followers} Followers</span>
        </div>
        <div className="meta">
          <p>Born on {dob}</p>
          <p id="joined">Joined on {joined}</p>
        </div>
        <ProfileTabs />
      </div>
    </div>
  );
}

export default ProfileComponent;
