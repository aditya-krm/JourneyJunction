import React from "react";
import "./LandingPage.css";
import RightSideBar from "../RightSideBar/RightSideBar";
import Content from "../Content/Content";

function LandingPage() {
  return (
    <div className="landingpage">
      <Content />
      <RightSideBar />
    </div>
  );
}

export default LandingPage;
