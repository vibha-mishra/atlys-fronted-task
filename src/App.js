import React, { useState } from "react";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <MainLayout>
      {isLoggedIn ? (
        <Home setIsLogin={setIsLogin} isLogin={isLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} isLogin={isLogin} setIsLoggedIn={setIsLoggedIn}/>
      )}
    </MainLayout>
  );
}

export default App;
