import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

function LoginForm({ setIsLogin, isLogin, setIsLoggedIn }) {
  const handleSubmit = (event, { email, password }) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const stringifiedUser = JSON.stringify(user)
    localStorage.setItem("login", stringifiedUser);
    setIsLoggedIn(true);
  };

  return (
    <AuthLayout
      handleSubmit={handleSubmit}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
    />
  );
}

export default LoginForm;
