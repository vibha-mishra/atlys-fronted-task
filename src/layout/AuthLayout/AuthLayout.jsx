import React from "react";
import Form from "../../components/LoginForm/Form";
import { text } from "../../common/strings";
import "./styles.css";

const AuthLayout = ({ handleSubmit, isLogin, setIsLogin }) => {
  return (
    <div className="auth-layout-container">
      <div className="auth-heading">
        {isLogin ? text.welcomeBack : text.signUp}
      </div>
      <div className="auth-title">
        {isLogin ? text.loginIntoYourAcc : text.createAnAcc}
      </div>
      <Form
        handleSubmit={(event, { email, password, username }) =>
          handleSubmit(event, { email, password, username })
        }
        isLogin={isLogin}
      />
      <div className="auth-footer">
        <p className="auth-footer-text">
          {isLogin ? text.notRegistered : text.alreadyHaveAcc}{" "}
          <a
            href="#"
            className="auth-footer-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? text.registerHere : text.loginHere}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
