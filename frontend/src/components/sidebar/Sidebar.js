import React from "react";
import "./sidebar.css";
import { FaNewspaper } from "react-icons/fa";
import { useSelector } from "react-redux";
const Sidebar = () => {
  let userData = useSelector((state) => state.user.userInfo);

  return (
    <div className="sidebar">
      <img className="sidebarCover" src="images/banner.png" />
      <div className="sidebarProfileContainer">
        <img className="sidebarProfile" src="images/profileimg.png" />
      </div>
      <h2 className="profileName">
        {userData && `${userData.first_name} ${userData.last_name}`}
      </h2>
      <p className="profileUrl">www.abm.com</p>
      <div className="sidebarOtherInfo">
        <div className="item">
          <h4>930</h4>
          <p className="profileUrl">Friends</p>
        </div>
        <div className="item">
          <h4>87</h4>
          <p className="profileUrl">Posts</p>
        </div>
        <div className="item">
          {" "}
          <h4>1k</h4>
          <p className="profileUrl">Follower</p>
        </div>
      </div>

      <ul>
        <li>
          <FaNewspaper />
          Newsfeed
        </li>
        <li>
          <FaNewspaper />
          Videos
        </li>
        <li>
          <FaNewspaper />
          Groups
        </li>
        <li>
          <FaNewspaper />
          Photos
        </li>
        <li>
          <FaNewspaper />
          Friends
        </li>
        <li>
          <FaNewspaper />
          Friends Request
        </li>
        <li>
          <FaNewspaper />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
