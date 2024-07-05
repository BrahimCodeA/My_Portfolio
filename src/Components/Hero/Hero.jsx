import React, { useEffect } from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpeg";
import dark_arrow from "../../assets/dark-arrow.png";
import icon_linkedin from "../../assets/icon-linkedin.png";
import icon_github from "../../assets/icon-github.png";
import icon_domaine from "../../assets/icon-domaine.png";

const Hero = () => {
  useEffect(() => {
    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    if (heroLeft) {
      heroLeft.classList.add("animate-left");
    }
    if (heroRight) {
      heroRight.classList.add("animate-right");
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" class="hero container">
      <div className="hero-section">
        <div class="hero-left">
          <h1>
            Ibrahim Daoudi
            <a
              href="https://www.linkedin.com/in/ibrahim-daoudi-47053926b/"
              target="_blank"
            >
              <img src={icon_linkedin} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/BrahimCodeA" target="_blank">
              <img src={icon_github} alt="GitHub Icon" />
            </a>
            <a href="http://dekubrahim.pythonanywhere.com" target="_blank">
              <img src={icon_domaine} alt="Domain Icon" />
            </a>
          </h1>
          <h2>Développeur Web Full Stack</h2>
          <p>
            Je suis développeur Web actuellement étudiant à la 3W Academy.{" "}
            <br /> Je recherche une alternance pour enrichir mes compétences et
            contribuer à des projets innovants.
          </p>
          <button class="btn" onClick={scrollToContact}>
            Contactez-moi
            <img src={dark_arrow} alt="Arrow Icon" />
          </button>
        </div>
        <div class="hero-right">
          <link rel="stylesheet" href="" />
          <img src={hero} alt="Hero Image" class="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
