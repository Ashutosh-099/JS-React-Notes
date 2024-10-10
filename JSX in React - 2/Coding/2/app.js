import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/image/logo.png";
import UserIcon from "./assets/image/usericon.png";

// Functional Component
const HeaderComponent = () => {
  return (
    <div className="header-bar">
      <img src={Logo} alt="Logo" className="logo-img" />
      <input type="text" placeholder="Search" className="search-bar" />
      <img src={UserIcon} alt="Logo" className="user-icon" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
