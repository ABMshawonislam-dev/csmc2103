import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="posterinfo">
        <div className="left">
          <img src="images/profileimg.png" />
          <div className="posterdetials">
            <h4>A B M Shawon Islam</h4>
            <p>23 minutes ago</p>
          </div>
        </div>
        <div className="right">
          <h5>...</h5>
        </div>
      </div>
      <p className="posttext">
        I have great news to share with you all! I’ve been officially made a
        game streaming verified partner by Streamy http://lyt.ly/snej25. What
        does this mean? I’ll be uploading new content every day, improving the
        quality and I’m gonna have access to games a month before the official
        release. This is a dream come true, thanks to all for the support!!!
      </p>
    </div>
  );
};

export default Post;
