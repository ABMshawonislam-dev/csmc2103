import React from "react";
import "./newsfeed.css";
import { useSelector } from "react-redux";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import NewsFeedBottom from "../newsfeedbottom/NewsFeedBottom";
const Newsfeed = ({ isnewsfeed }) => {
  let userData = useSelector((state) => state.user.userInfo);
  return (
    <div className="newsfeed">
      <img className="newsfeedCover" src="images/newsfeedcover.png" />
      <div className="newsfeedProfileContainer">
        <img className="newsfeedProfile" src="images/newsfeedprofile.png" />
      </div>
      <div className="profileShortInfo">
        <div className="item">
          <div className="sidebarOtherInfo" style={{ margin: 0 }}>
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
        </div>
        <div className="item">
          <h2 className="profileName">
            {userData && `${userData.first_name} ${userData.last_name}`}
          </h2>
          <p className="profileUrl">www.abm.com</p>
        </div>
        <div className="item">
          <div className="icons">
            <div className="icon" style={{ background: "#3763D2" }}>
              <AiFillFacebook />
            </div>
            <div className="icon" style={{ background: "#3763D2" }}>
              <AiFillFacebook />
            </div>
            <div className="icon" style={{ background: "#3763D2" }}>
              <AiFillFacebook />
            </div>
            <div className="icon" style={{ background: "#3763D2" }}>
              <AiFillFacebook />
            </div>
          </div>
        </div>
      </div>

      <NewsFeedBottom isnewsfeed={isnewsfeed} />
    </div>
  );
};

export default Newsfeed;
