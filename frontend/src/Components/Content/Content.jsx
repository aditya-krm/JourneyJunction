import React, { useState } from "react";
import "./Content.css";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import postsData from "../../test/postTest.js";

function Content() {
  const [posts, setPosts] = useState(postsData); // Initialize state with existing posts

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning of the list
  };

  return (
    <div className="content">
      <NewPost
        profileimg="https://randomuser.me/api/portraits/men/86.jpg"
        name="Random"
        onAddPost={handleAddPost} // Pass the function to NewPost
      />
      {posts.map((post, index) => (
        <Posts
          key={index}
          profileImg={post.profileImg}
          fullName={post.fullName}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          time={post.time}
          isFollowing={post.isFollowing}
          privacy={post.privacy} // Pass privacy here
        />
      ))}
    </div>
  );
}

export default Content;
