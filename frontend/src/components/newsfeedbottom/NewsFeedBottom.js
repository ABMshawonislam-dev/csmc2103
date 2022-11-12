import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import About from "../aboutme/About";
import Photos from "../photos/Photos";
import Post from "../post/Post";
import Videos from "../videos/Videos";
const NewsFeedBottom = ({ isnewsfeed }) => {
  return (
    <div className="newsfeedBottom">
      <div className="leftaboutinfo" style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: "0" }}>
          <About />
          <Photos />
          <Videos />
        </div>
      </div>

      <div className="newsfeedpost">
        {isnewsfeed && <h1>here</h1>}

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default NewsFeedBottom;
