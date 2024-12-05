import React from "react";
import "./Home.scss";
import couple from "../../Assets/Couple.jpg";
import dec1 from "../../Assets/Deco_Couple.jpg";
import dec2 from "../../Assets/Decoration.jpg";
import dec3 from "../../Assets/Decoration1.jpg";
import dec4 from "../../Assets/Decoration2.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* FIRST DIV */}
      <div className="div">
        <div className="content">
          <div id="container">
            <h1>WELCOME TO ROYAL BLOOM</h1>
            <p>
              At Royal Bloom, we bring your dreams to life with unmatched
              creativity and precision. Established in 2016, we have been
              curating unforgettable celebrations that blend elegance, luxury,
              and personal touches.
            </p>
            <p>
              Whether it’s a grand wedding or an intimate gathering, we are
              dedicated to making every moment extraordinary. With a passion for
              perfection and attention to detail, Royal Bloom ensures your
              special day is nothing short of magical.
            </p>
            <i>--- Let us turn your vision into timeless memories.</i>
          </div>
        </div>
        <div className="intro_Pic"></div>
      </div>

      {/* SECOND DIV */}
      <div className="intro">
        <div id="header">
          <p className="design"></p>
          <p>ROYAL BLOOM</p>
          <p className="design"></p>
        </div>
        <div id="sentence">
          <p id="head">THE BEST EVENT MANAGEMENT COMPANY</p>
          <i>Since 2016</i>
          <p>
            With over a decade of experience and a portfolio of 10,000+ events,
            Royal Bloom stands out as a trusted leader in event management.
            We're dedicated to delivering unforgettable experiences while
            prioritizing our clients' satisfaction at every stage. Let us bring
            your vision to life with creativity, precision, and passion.
          </p>
          <p></p>
        </div>
      </div>

      {/* THIRD DIV */}
      <div id="service">
        <div id="text-service">
          <div id="ser-head">
            <p className="ser-design"></p>
            <p>OUR SERVICES</p>
            <p className="ser-design"></p>
          </div>
          <h1>CRAFTING UNFORGETTABLE EVENT EXPERIENCES</h1>
          <p>
            At Royal Bloom, we transform visions into extraordinary events by
            meticulously crafting every detail to create memorable experiences
            that captivate, inspire, and leave a lasting impression.
          </p>
        </div>
        <div id="images-service">
          <img src={couple} alt="couple.jpg" />
          <img src={dec1} alt="couple.jpg" />
          <img src={dec2} alt="couple.jpg" />
          <img src={dec3} alt="couple.jpg" />
          <img src={dec4} alt="couple.jpg" />
        </div>
      </div>

      {/* FOURTH DIV */}
      <div id="All-Service">
        <div className="serve">
          <h1>DESTINATION WEDDINGS</h1>
          <i>Creating Timeless Moments</i>
          <p>
            We specialize in bringing your dream destination wedding to life,
            crafting every detail to perfection.
          </p>
        </div>
        <div className="serve">
          <h1>BRIDE & GROOM ENTRIES</h1>
          <i>Enter With Magic</i>
          <p>
            Creating grand, memorable entrances tailored to each couple, adding
            magic to their big day.
          </p>
        </div>
        <div className="serve">
          <h1>THEMED BIRTHDAYS & PARTIES</h1>
          <i>Celebrate with Timeless Memories</i>
          <p>
            From intimate gatherings to grand parties, we specialize in creating
            lively, personalized events that reflect your unique style and
            personality
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
