import React from "react";
import "./Footer.css";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="footer-haut">
        <button className="btn">ID</button>
        <h3 className="active">Ibrahim</h3>
      </div>
      <p className="paragraphe">
        © Développé par Ibrahim Daoudi - <span>{newYear}</span>
      </p>
    </div>
  );
};

export default Footer;
