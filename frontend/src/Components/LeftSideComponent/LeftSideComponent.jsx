import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideComponent.css";

function LeftSideComponent({ name, link, icon }) {
  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? "active" : "")}>
      <div className="left-side-component">
        {icon}
        <span>{name}</span>
      </div>
    </NavLink>
  );
}

export default LeftSideComponent;
