import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollOffset = -170;
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <button className="btn">ID</button>
        <h3 className="active">Ibrahim.</h3>
        <div
          className={`menu ${isMenuOpen ? "openmenu" : ""}`}
          id="menu"
          onClick={toggleMenu}
        >
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? "navbar" : ""}`}
          onClick={toggleMenu}
        >
          <li>
            <Link to="home" smooth={true} duration={500} offset={scrollOffset}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={scrollOffset}>
              À Propos
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={scrollOffset}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projet"
              smooth={true}
              duration={500}
              offset={scrollOffset}
            >
              Projet
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="active-contact"
              offset={scrollOffset}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
