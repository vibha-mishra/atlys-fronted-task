import React from "react";
import dots from "../../assets/images/dotsHorizontal.png";
import comment from "../../assets/images/chatBubble.png";
import "./styles.css";
import { text } from "../../common/strings";

const Posts = ({ post }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-info">
          <div className="post-user-avatar">
            <img src={post?.profilePicture} alt="user" />
          </div>
          <div>
            <div className="post-user-name">
              {post.firstName} {post.lastName}
            </div>
            <div className="post-time">
              {post.time} {post?.isEdited && "  . Edited"}
            </div>
          </div>
        </div>
        <div className="post-dots">
          <img src={dots} alt="dots" />
        </div>
      </div>
      <li className="post-content">
        <span className="post-feeling">
          <img src={post.feeling} alt="feeling" />
        </span>
        <span>{post.title}</span>
      </li>
      <div className="post-comments">
        <div className="post-comment-icon">
          <img src={comment} alt="comment" />
        </div>
        <span className="post-comment-text">
          {post.comments?.totalCount} {text.comments}
        </span>
      </div>
    </div>
  );
};

export default Posts;
