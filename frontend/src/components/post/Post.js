import React from "react";
import { AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

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
      <div className="postinfo">
        <div className="likeinfo">
          <div>
            <img src="images/like.png" />
            <img src="images/love.png" />
            <img src="images/angry.png" />
          </div>
          <p>12</p>
        </div>
        <div className="commentinfo">
          <p>12 Comments</p>
        </div>
        <div className="shareinfo">
          <p>2 Shares</p>
        </div>
      </div>
      <div className="likeaction">
        <div>
          <AiFillLike /> Like
          <div className="likeChoose">
            <img src="images/like.png" />
            <img src="images/love.png" />
            <img src="images/angry.png" />
            <img src="images/happy.png" />
          </div>
        </div>
        <div>
          <BiCommentDetail /> Comment
        </div>
        <div>
          <AiOutlineShareAlt /> Share
        </div>
      </div>
    </div>
  );
};

export default Post;
