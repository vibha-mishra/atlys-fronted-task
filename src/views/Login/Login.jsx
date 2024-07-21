import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/images/Logo.png";
import "./styles.css";

const Login = ({ setIsLogin, isLogin, setIsLoggedIn }) => {
  return (
    <div className="custom-container">
      <div className="custom-logo">
        <img src={logo} alt="logo" />
      </div>
      <LoginForm
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
