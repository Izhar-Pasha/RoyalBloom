import React from "react";
import "./Service.scss";
import icon1 from "../../Assets/icons/icon1.png";
import icon2 from "../../Assets/icons/icon2.png";
import icon3 from "../../Assets/icons/icon3.png";
import icon4 from "../../Assets/icons/icon4.png";
import icon5 from "../../Assets/icons/icon5.png";
import icon6 from "../../Assets/icons/icon6.png";
import icon7 from "../../Assets/icons/icon7.png";

const Service = () => {
  return (
    <div id="service">
      {/* FIRST DIV */}
      <div className="srvce-intro">
        <h1>
          SOPHISTICATED PLANNING. SEAMLESS EXECUTION. MEMORABLE EXPERIENCE.
        </h1>
      </div>
      {/* SECOND DIV */}
      <div id="menu">
        <div id="text">
          <h4>WE PROVIDE</h4>
          <h1>Value For Money Services</h1>
          <p>
            At Royal Bloom, we take pride in offering unparalleled event
            planning services that are both budget-friendly and extraordinary,
            ensuring every moment is seamlessly crafted and every penny delivers
            unmatched value for your unforgettable celebration.
          </p>
        </div>
        <div id="catelogue">
          <div className="cat">
            <img src={icon1} alt="icon.png" />
            <h3>FireWorks</h3>
          </div>

          <div className="cat">
            <img src={icon2} alt="icon.png" />
            <h3>SFX & FOGG</h3>
          </div>

          <div className="cat">
            <img src={icon3} alt="icon.png" />
            <h3>SPECIAL ENTRY</h3>
          </div>

          <div className="cat">
            <img src={icon4} alt="icon.png" />
            <h3>ENTERTAINMENT & ARTISTS</h3>
          </div>

          <div className="cat">
            <img src={icon5} alt="icon.png" />
            <h3>DANCERS</h3>
          </div>

          <div className="cat">
            <img src={icon6} alt="icon.png" />
            <h3>NAMING CEREMONY</h3>
          </div>

          <div className="cat">
            <img src={icon7} alt="icon.png" />
            <h3>MUSICAL ENSEMBLE</h3>
          </div>
        </div>
      </div>

      {/* THIRD DIV */}
      <div id="depth">
        <h1>EXPLORE OUR EXCEPTIONAL RANGE OF SERVICES</h1>
        <div className="row">
          <div className="detail_service">
            <ul>
              <h3>SPECIAL ENTRY</h3>
              <li>Flower Chariot</li>
              <li>Blue Royal Chariot</li>
              <li>Face Chariot</li>
              <li>Moon Chariot</li>
              <li>Globe Chariot</li>
              <li>Bahubali Chariot</li>
              <li>Baby Cradle</li>
              <li>Glass Pathway</li>
              <li>Varamala Concept</li>
              <li>Adiyogi Concept</li>
            </ul>
          </div>

          <div className="detail_service">
            <ul>
              <h3>SFX & FOGG</h3>
              <li>CO2 Gun</li>
              <li>CO2 Blower</li>
              <li>CO2 Jet</li>
              <li>Jumbo Fogg Machine</li>
              <li>Low Fogg Machine</li>
              <li>Dry Ice Pot</li>
              <li>Normal Petal Shower and Blower</li>
            </ul>
          </div>

          <div className="detail_service">
            <ul>
              <h3>NAME CEREMONY</h3>
              <li>Shell Concept</li>
              <li>Wings Opening</li>
              <li>Helium Balloons Concept</li>
              <li>Screen Opening</li>
              <li>Moon Revolving</li>
              <li>Antique Name Reveal</li>
              <li>Baby Elephant Chariot</li>
            </ul>
          </div>

          <div className="detail_service">
            <ul>
              <h3>MUSICAL ENSEMBLE</h3>
              <li>Ganga Aarthi</li>
              <li>Nastic Doll</li>
              <li>Panjabi Doll</li>
              <li>Chenda Melam</li>
              <li>Trumpet With Bandset</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="detail_service">
            <ul>
              <h3>FIREWORKS</h3>
              <li>Cold Pyro</li>
              <li>Sky Shots</li>
              <li>Aerial Sky Shots</li>
              <li>Swing Machine</li>
              <li>Fan Wheel</li>
              <li>Mines</li>
              <li>Comets</li>
              <li>Color Smoke</li>
              <li>Paper,Ribbon,Ballon Blast</li>
              <li>Niagara Falls</li>
              <li>Color Bomb</li>
              <li>Smokeless pyro</li>
              <li>Hand Cold Pyro</li>
            </ul>
          </div>
          <div className="detail_service">
            <ul>
              <h3>ENTERTAINMENT & ARTISTS</h3>
              <li>Tall Anglo</li>
              <li>Mermaid Lady</li>
              <li>Flower Lady</li>
              <li>LED Board</li>
              <li>Water Fountain</li>
              <li>single from lady</li>
              <li>Red Carpet</li>
              <li>Hosters</li>
              <li>Four Member frame baby</li>
              <li>Niagara Falls</li>
              <li>Rotating Violinist</li>
              <li>Musician</li>
              <li>Cycle Crumble</li>
            </ul>
          </div>
          <div className="detail_service">
            <ul>
              <h3>DANCERS</h3>
              <li>Wings Entry</li>
              <li>LED Wings Entry</li>
              <li>Diya Entry</li>
              <li>Violin Entry</li>
              <li>Padmavati Entry</li>
              <li>Lotus Entry</li>
              <li>Classsical Entry</li>
              <li>Flash Mob</li>
              <li>Mohiniyattam</li>
              <li>Yakshagana</li>
              <li>Kathakali</li>
              <li>Dandiya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
