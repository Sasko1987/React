import React from "react";

const Header = ({ title, link1, link2, link3 }) => {
  return (
    <header>
      <div className="logo">
        <p className="logo-name blue-text">{title}</p>
      </div>
      <div className="nav">
        <ul className="nav-links blue-text">
          <li>{link1}</li>
          <li>{link2}</li>
          <li>{link3}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
