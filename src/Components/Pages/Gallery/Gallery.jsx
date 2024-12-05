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
// import V1 from "../../../../public/Videos/Deco_Video.mp4";
// import V2 from "../../../../public/Videos/Deco_Video1.mp4";
// import V3 from "../../../../public/Videos/Deco_Video2.mp4";
// import V4 from "../../../../public/Videos/Deco.mp4";
// import V6 from "../../../../public/Videos/Home.mp4";

const Gallery = () => {
  return (
    <div id="Gallery">
      <h2>EXPLORE OUR EXCEPTIONAL JOURNEY</h2>
      {/*  */}
      <h2>VIDEO'S</h2>
      <div id="content">
        {/* <video src={V1} className="video" autoPlay muted loop></video> */}

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=MIBKczKpgvY&list=PLPfFfp1_hOuzHopE0_p_EE5HaIf2w-MaY&index=1"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=wIQQJK6DFMM&list=PLPfFfp1_hOuzHopE0_p_EE5HaIf2w-MaY&index=2"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=9RiKE9gMZWg&list=PLPfFfp1_hOuzHopE0_p_EE5HaIf2w-MaY&index=3"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=x5nvVVE2j0M&list=PLPfFfp1_hOuzHopE0_p_EE5HaIf2w-MaY&index=4"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=MYA8zygcB-w&list=PLPfFfp1_hOuwfHvJrOXCe1NEyf_myolns&index=5"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=v42k-VmoGNg&list=PLPfFfp1_hOuwfHvJrOXCe1NEyf_myolns&index=6"
            type="video/mp4"
          />
        </video>

        <video controls>
          <source
            src="https://www.youtube.com/watch?v=OGi2BisERaE&list=PLPfFfp1_hOuwfHvJrOXCe1NEyf_myolns&index=7"
            type="video/mp4"
          />
        </video>

        {/* <video controls>
          <source
            src="https://www.youtube.com/watch?v=MIBKczKpgvY"
            type="video/mp4"
          />
        </video> */}
        {/* <video src={V2} className="video" autoPlay muted loop></video>
        <video src={V3} className="video" autoPlay muted loop></video>
        <video src={V4} className="video" autoPlay muted loop></video>
        <video src={V6} className="video" autoPlay muted loop></video> */}
      </div>
      {/* </div> */}
      <h2>PHOTOS'S</h2>
      <div id="photos">
        <div className="column">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
        <div className="column">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
