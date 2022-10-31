import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const Videos = () => {
  return (
    <div className="newsfeedinfo">
      <div className="newsfeedleftinfo">
        <h5>
          Videos <span>7</span>
        </h5>
        <h5>...</h5>
      </div>
      <div className="videoholder">
        <div className="video">
          <img src="images/profilevideoside.png" />
          <div className="icon">
            <BsFillPlayFill className="playicon" />
          </div>
        </div>
        <div className="video">
          <img src="images/profilevideoside.png" />
          <div className="icon">
            <BsFillPlayFill className="playicon" />
          </div>
        </div>
        <div className="video">
          <img src="images/profilevideoside.png" />
          <div className="icon">
            <BsFillPlayFill className="playicon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
