import React, { useState } from "react";
import "./ProfileTabs.css";

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts");

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <div>Posts content goes here</div>;
      case "comments":
        return <div>Comments content goes here</div>;
      case "favorites":
        return <div>Favorites content goes here</div>;
      case "likes":
        return <div>Likes content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="profile-tabs">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`tab-button ${activeTab === "comments" ? "active" : ""}`}
          onClick={() => setActiveTab("comments")}
        >
          Comments
        </button>
        <button
          className={`tab-button ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
        <button
          className={`tab-button ${activeTab === "likes" ? "active" : ""}`}
          onClick={() => setActiveTab("likes")}
        >
          Likes
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default ProfileTabs;
