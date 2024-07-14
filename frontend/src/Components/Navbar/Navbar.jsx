import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

function Navbar({ onAddGoal }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search anything"
        />
        <SearchOutlinedIcon className="search-icon" />
      </div>
      <ul className="links">
        <li>
          <button className="add" onClick={onAddGoal}>
            <p>New Goal</p>
            <AddCircleOutlineIcon />
          </button>
        </li>
        <li>
          <NotificationsNoneIcon />
        </li>
        <li>
          <MailOutlineOutlinedIcon />
        </li>
        <li>
          <div className="profileicon">
            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
