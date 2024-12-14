import React from "react";
import "./About.scss";
import { TbTargetArrow } from "react-icons/tb";
import { FaLowVision } from "react-icons/fa";
import abt_img from "../../Assets/About_Banner.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <div id="abt_img">
          <img src={abt_img} alt="about_img.png" />
        </div>
        <div className="bnr">
          <h1>ABOUT US</h1>
          <div id="text-content">
            <div className="txt">
              <h4>Welcome To</h4>
              <h2>ROYAL BLOOM</h2>
              <p>
                We are dedicated to transforming your dreams into extraordinary
                experiences. At <b>Royal Bloom</b>, our passion lies in crafting
                unforgettable events that inspire, connect, and celebrate life's
                most cherished moments.
              </p>
            </div>
            <div className="txticon txt">
              <div className="icon">
                <i>
                  <TbTargetArrow />
                </i>
              </div>
              <div className="text1">
                <h2>Our Mission</h2>
                <p>
                  To be your trusted partner in planning and executing events
                  that resonate with creativity, excellence, and innovation. Our
                  goal is to bring your vision to life with seamless execution
                  and unparalleled attention to detail.
                </p>
              </div>
            </div>
            <div className="txticon txt">
              <div className="icon">
                <i>
                  <FaLowVision />
                </i>
              </div>
              <div className="text1">
                <h2>Our Vision</h2>
                <p>
                  To redefine event planning in South India by setting new
                  benchmarks in quality and creativity. We aim to be a beacon of
                  trust and excellence, delivering custom-tailored solutions
                  that exceed expectations and create timeless memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews">
        <h1>REVIEWS</h1>
        <div id="video_container">
          <iframe
            src="https://youtube.com/embed/sR1uX5dEtDY?si=NXyLwuhkcD0bg15h"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/GcRhbWm2Zlc?si=nx7uwNCAB3Q61qzL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="video"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/oIPtpkotCZU?si=mK479sCkfNe0Ez-g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
