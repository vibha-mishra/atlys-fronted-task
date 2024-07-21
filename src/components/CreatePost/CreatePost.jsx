import React from "react";
import Button from "../Button/Button";
import think from "../../assets/images/think.png";
import "./styles.css";
import { text } from "../../common/strings";

const CreatePost = ({ handleSubmit, newPost, handleChange }) => {
  return (
    <div className="create-post-container">
      <h2 className="create-post-title">{text.createPost}</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-post-form">
          <span className="create-post-textarea-wrapper">
            <img src={think} alt="think" />
          </span>
          <textarea
            className="create-post-textarea"
            id="post"
            name="post"
            placeholder="How are you feeling today?"
            value={newPost}
            onChange={handleChange}
            rows="2"
            required
          />
        </div>
        <div className="create-post-button-wrapper">
          <Button
            type="submit"
            className="create-post-button"
            disabled={!newPost}
          >
            {text.post}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
