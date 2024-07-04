import React from "react";
import "./About.css";
import CV from "../../assets/Ibrahim_CV.jpg";
import icon_download from "../../assets/icon-download.png";
import Cv_pdf from "../../assets/Ibrahim_CV.pdf";

const About = () => {
  return (
    <div id="about" className="abouts">
      <div className="about-img">
        <a href={Cv_pdf} target="_blank">
          <img src={CV} alt="CV" className="img-cv" />
        </a>
      </div>
      <div className="about-text">
        <p>
          <strong>Je suis à la recherche d'une alternance</strong> pour
          développer mes compétences et{" "}
          <strong>enrichir mon expérience.</strong>
          <br />
          <hr /> <strong>Curieux, autonome, motivé, esprit d'équipe,</strong> je
          suis constamment à la recherche de nouveaux défis pour approfondir mes
          connaissances en programmation et{" "}
          <strong>contribuer à de nouveaux projets.</strong>
          <br /> <hr className="hr-2" /> Je travaille généralement avec{" "}
          <strong>JavaScript, React, Node.js et MongoDB,</strong>
          <br /> je suis sur que cette opportunité me permettra de grandir
          professionnellement{" "}
          <strong>
            tout en apportant une valeur ajoutée à l'équipe qui m'accueillera.
          </strong>
        </p>
        <a download="" href={Cv_pdf}>
          Téléchargez CV
        </a>
      </div>
    </div>
  );
};

export default About;
