import React from "react";

const About = () => {
  return (
    <div className="newsfeedinfo">
      <div className="newsfeedleftinfo">
        <h5>About Me</h5>
        <h5>...</h5>
      </div>
      <p>
        Hi! My name is A B M Shawon Islam but some people may know me as
        GameHuntress! I have a Twitch channel where I stream, play and review
        all the newest games.
      </p>

      <ul>
        <li>
          {" "}
          <span>Joined:</span> 22 November 2008
        </li>
        <li>
          {" "}
          <span>City:</span> Dhaka
        </li>
        <li>
          {" "}
          <span>Age:</span> 18 Years
        </li>
      </ul>
    </div>
  );
};

export default About;
