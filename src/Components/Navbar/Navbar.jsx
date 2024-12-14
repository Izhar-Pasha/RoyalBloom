import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/royalbloom.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Navbar = () => {
  const [isDisplay, setisDisplay] = useState(false);

  const toggleDisplay = () => {
    setisDisplay((prevState) => !prevState);

    if (!isDisplay) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };

  return (
    <div id="nav">
      <div className="logo">
        <img src={logo} alt="Logo" className="innerlogo" />
      </div>

      <div className="social_media">
        <a
          href="https://www.instagram.com/royalbloomweddingevent/profilecard/?igsh=Y205dHZsdHR2eG84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FaInstagram />
          </i>
        </a>
        <a
          href="https://www.youtube.com/@royalbloomweddingentertainment?si=6YYw7s7sLKoFGnqI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FiYoutube />
          </i>
        </a>
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
