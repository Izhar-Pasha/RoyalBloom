import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/royalbloom.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isDisplay, setisDisplay] = useState(false);

  const toggleDisplay = () => {
    setisDisplay((prevState) => !prevState);
  };

  return (
    <div id="nav">
      <div className="logo">
        <img src={logo} alt="Logo" className="innerlogo" />
      </div>
      <div className="icons">
        <i onClick={toggleDisplay}>
          <TiThMenu className="icon" />
        </i>
      </div>
      <div id="navbar">
        <ul>
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Contact">Contact</a>
        </ul>
      </div>
      <div id="sidebar" className={isDisplay ? "show-sidebar" : "hide-sidebar"}>
        <i>
          <IoCloseSharp className="icon-2" onClick={toggleDisplay} />
        </i>
        <ul>
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Contact">Contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
