/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/reading-desk.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

// Generate a scroll down arrow that when clicked will scroll to the next section of the page with a smooth scroll behavior. The arrow should be centered horizontally and positioned near the bottom of the viewport. Use the imported arrowSvg for the image source and set the alt text to the imageAltText variable.


const Home = ({ name, title }) => {
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToAbout();
    }
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem", color: "white" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        className="scroll-arrow-container"
        style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
          alt="Bajar a la sección Sobre"
          role="button"
          tabIndex={0}
          onClick={scrollToAbout}
          onKeyDown={handleKeyDown}
        />
      </div>

    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
