import React, { useState } from "react";
import "./CreatePost.css";

function CreatePost({ profileimg, fullName, closeDialog, onAddPost }) {
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState("public");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      profileImg: profileimg,
      fullName,
      content,
      privacy,
      likes: 0,
      comments: 0,
      shares: 0,
      time: new Date().toISOString(),
    };
    onAddPost(newPost);
    setContent("");
    closeDialog();
  };

  return (
    <div className="create-post-modal">
      <div className="create-post-header">
        <h3>Create Post</h3>
        <button className="close-modal" onClick={closeDialog}>
          X
        </button>
      </div>
      <div className="create-post-body">
        <div className="user-desc">
          <div className="profileicon">
            <img src={profileimg} alt={fullName} />
          </div>
          <div className="privacy">
            <p>{fullName}</p>
            <select
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
            >
              <option value="public">Public</option>
              <option value="followers">Followers</option>
              <option value="onlyme">Only me</option>
            </select>
          </div>
        </div>
        <textarea
          placeholder={`What's on your mind, ${fullName}?`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="create-post-footer">
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
