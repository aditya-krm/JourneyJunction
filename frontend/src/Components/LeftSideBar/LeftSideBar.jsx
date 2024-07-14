import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";
import LeftSideComponent from "../LeftSideComponent/LeftSideComponent";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // Import Home Icon

function LeftSideBar() {
  return (
    <div className="left-side-bar">
      <LeftSideComponent name="Home" link="/" icon={<HomeOutlinedIcon />} />
      <LeftSideComponent
        name="Profile"
        link="/profile"
        icon={<AccountCircleOutlinedIcon />}
      />
      <LeftSideComponent
        name="Progress"
        link="/progress"
        icon={<TimelapseOutlinedIcon />}
      />
      <LeftSideComponent
        name="Saved"
        link="/saved"
        icon={<BookmarkBorderOutlinedIcon />}
      />
      <LeftSideComponent
        name="Events"
        link="/events"
        icon={<CalendarTodayOutlinedIcon />}
      />
      {/* Add more LeftSideComponent here */}
    </div>
  );
}

export default LeftSideBar;
