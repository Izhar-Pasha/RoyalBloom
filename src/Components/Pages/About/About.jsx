import React from "react";
import "./About.scss";
import R1 from "../../../../public/Videos/Reviews1.mp4";
import R2 from "../../../../public/Videos/Reviews2.mp4";
import R3 from "../../../../public/Videos/Reviews3.mp4";
import { TbTargetArrow } from "react-icons/tb";
import { FaLowVision } from "react-icons/fa";
import { useRef } from "react";

const About = () => {
  const videoRefs = useRef([]);

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="about">
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
                To be your trusted partner in planning and executing events that
                resonate with creativity, excellence, and innovation. Our goal
                is to bring your vision to life with seamless execution and
                unparalleled attention to detail.
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
                trust and excellence, delivering custom-tailored solutions that
                exceed expectations and create timeless memories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews">
        <h1>REVIEWS</h1>
        <div id="review_video">
          {[R1, R2, R3].map((videoSrc, index) => (
            <div key={index} className="video-container">
              <video
                src={videoSrc}
                ref={(el) => (videoRefs.current[index] = el)}
                controls={false} // Disable default controls
              />
              <button
                onClick={() => togglePlayPause(index)}
                className="play-pause-btn"
              >
                ▶️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
