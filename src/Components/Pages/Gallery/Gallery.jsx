import React from "react";
import "./Gallery.scss";
import img1 from "../../Assets/Decoration2.jpg";
import img2 from "../../Assets/Couple.jpg";
import img3 from "../../Assets/Deco_Couple.jpg";
import img4 from "../../Assets/Decoration1.jpg";
import img5 from "../../Assets/Decoration.jpg";
import img6 from "../../Assets/G1.jpg";
import img7 from "../../Assets/G2.jpg";
import img8 from "../../Assets/G3.jpg";
import img9 from "../../Assets/G4.jpg";
import img10 from "../../Assets/G5.jpg";
import img12 from "../../Assets/G7.jpg";
import img13 from "../../Assets/G8.jpg";

const Gallery = () => {
  return (
    <div id="Gallery">
      <h2>EXPLORE OUR EXCEPTIONAL JOURNEY</h2>
      <h2>VIDEO'S</h2>
      <div id="content">
        <iframe
          src="https://youtube.com/embed/ruld8oxHAWs?si=BBnBRddrYKkk5yLG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/_K5DPnLiksM?si=qp3f7Yys2kGFFh1o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/5l6_g-Z6Jsg?si=QqkjecaDOm-W7sle"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/uyGNIhfT5NQ?si=s3Ybyt7AAl_apGI6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/kd1cfvFrpKM?si=G6ZM4fJL0Hy9Fjqf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/UBnzP1WhCQM?si=RNjtDyrfTYKtUwX_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/nJrFb3Z-V5I?rel=0&modestbranding=1&showinfo=0&controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtube.com/embed/9CR6-sSe3RA?si=6SElSAOS19PAsMso"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>PHOTOS'S</h2>
      <div id="photos">
        <div className="column">
          <img src={img1} alt="RoyalBloom.png" />
          <img src={img2} alt="RoyalBloom.png" />
          <img src={img3} alt="RoyalBloom.png" />
          <img src={img6} alt="RoyalBloom.png" />
          <img src={img7} alt="RoyalBloom.png" />
          <img src={img8} alt="RoyalBloom.png" />
        </div>
        <div className="column">
          <img src={img4} alt="RoyalBloom.png" />
          <img src={img5} alt="RoyalBloom.png" />
          <img src={img9} alt="RoyalBloom.png" />
          <img src={img10} alt="RoyalBloom.png" />
          <img src={img12} alt="RoyalBloom.png" />
          <img src={img13} alt="RoyalBloom.png" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
