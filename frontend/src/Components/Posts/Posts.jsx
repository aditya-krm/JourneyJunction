import React from "react";
import "./Posts.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Posts({
  profileImg,
  fullName,
  content,
  likes,
  comments,
  shares,
  time,
  isFollowing,
  onFollow,
  privacy,
}) {
  const getTimeElapsed = (postTime) => {
    const now = new Date();
    const postDate = new Date(postTime);
    const elapsed = now - postDate; // Time in milliseconds
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  };

  return (
    <div className="post-box">
      <div className="post-header">
        <div className="profile-info">
          <div className="profileicon">
            <img src={profileImg} alt={`${fullName}'s profile`} />
          </div>
          <div className="user-info">
            <span className="fullName">{fullName}</span>
            <div className="extras">
              <span className="time">{getTimeElapsed(time)}</span>
              <span className="privacy">
                {privacy === "public" && <PublicIcon />}
                {privacy === "followers" && <PeopleAltOutlinedIcon />}
                {privacy === "onlyme" && <LockOutlinedIcon />}
              </span>
            </div>
          </div>
          {!isFollowing && (
            <button className="follow-button" onClick={onFollow}>
              Follow
            </button>
          )}
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-footer">
        <div className="post-actions">
          <button className="likes">
            {likes} <FavoriteBorderOutlinedIcon />{" "}
          </button>
          <button className="comments">
            {comments} <ChatBubbleOutlineOutlinedIcon />{" "}
          </button>
          <button className="share">
            {shares} <ShareIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
