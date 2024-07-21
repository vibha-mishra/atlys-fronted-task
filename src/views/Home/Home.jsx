import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import { postArray } from "../../common/appConstant";
import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Posts/Posts";
import { text } from "../../common/strings";
import "./styles.css";

function Home({ isLogin, setIsLogin }) {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(postArray);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => setNewPost(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <div className="home-container">
        <div>
          <p className="greeting-title">{text.helloJane}</p>
          <p className="greeting-text">{text.howAreYouDoing}</p>
        </div>

        <CreatePost
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          newPost={newPost}
        />

        {posts.length > 0 && (
          <ul className="posts-list">
            {posts.map((post, index) => (
              <Posts post={post} key={index} />
            ))}
          </ul>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />
      </Modal>
    </>
  );
}

export default Home;
