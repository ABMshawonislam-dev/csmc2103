import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import About from "../aboutme/About";
import Photos from "../photos/Photos";
import Post from "../post/Post";
import Videos from "../videos/Videos";
const NewsFeedBottom = () => {
  return (
    <div className="newsfeedBottom">
      <div>
        <About />
        <Photos />
        <Videos />
      </div>
      <div className="newsfeedpost">
        <Post />
      </div>
    </div>
  );
};

export default NewsFeedBottom;
