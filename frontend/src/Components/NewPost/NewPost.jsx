import React, { useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import "./NewPost.css";

function NewPost({ profileimg, name, onAddPost }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = (event) => {
    if (event.target.classList.contains("dialog-backdrop")) {
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === "Escape" ? setIsDialogOpen(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  return (
    <div className="new-post-box">
      <div className="profileicon">
        <img src={profileimg} />
      </div>
      <div className="fake-input" onClick={openDialog}>
        {`What's on your mind, ${name}?`}
      </div>
      {isDialogOpen && (
        <div className="dialog-backdrop" onClick={closeDialog}>
          <CreatePost
            profileimg={profileimg}
            fullName={name}
            closeDialog={() => setIsDialogOpen(false)}
            onAddPost={onAddPost} // Pass the function to CreatePost
          />
        </div>
      )}
    </div>
  );
}

export default NewPost;
