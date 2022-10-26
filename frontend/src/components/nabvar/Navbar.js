import React from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaSms, FaTools } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="images/logo.png" />
      </div>
      <div className="navitem">
        <ul>
          <li>
            <FaBars />
          </li>
          <li>Careers</li>
          <li>Store</li>
          <li>FAQ</li>
          <li>...</li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search here ...." />
          <AiOutlineSearch className="searchicon" />
        </div>
        <div className="exp">
          <div className="text">
            <p>Next</p>
            <p>35 EXP</p>
          </div>
          <div className="lineholder">
            <div className="outerline"></div>
            <div className="innerline" style={{ width: "83px" }}></div>
          </div>
        </div>
        <div className="icons">
          <div className="cart">
            <BsFillCartFill />
            <p>5</p>
          </div>
          <FaSms />
          <div className="notificationDotHolder">
            <IoMdNotifications />
            <div className="notificationDot"></div>
          </div>
        </div>
        <div className="settingicon">
          <FaTools />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
