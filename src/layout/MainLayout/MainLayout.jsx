import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {children}
    </div>
  );
};

export default MainLayout;
