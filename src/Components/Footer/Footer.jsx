import React from "react";
import "./Footer.scss";
import Logo from "../Assets/navLogo1.gif";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="logo.img" />
        </div>
        <div className="routers">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="builder">
        <div className="container">
          <div className="copyRyt">
            &#169;Royal Bloom || All Rights Reserved{" "}
          </div>
          <i>Build By Izhar Pasha</i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
