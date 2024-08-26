import { useEffect, useRef } from "react";
import "./Projet.css";
import Projet1 from "../../assets/Projet-1.jpeg";
import Projet2 from "../../assets/Projet-2.jpeg";
import Projet3 from "../../assets/Projet-3.png";
import icon_github from "../../assets/icon-github.png";
import icon_domaine from "../../assets/icon-domaine.png";

const Projet = () => {
  const newProjetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newProjetRef.current.classList.add("animed-right");
        observer.unobserve(newProjetRef.current);
      }
    });
    observer.observe(newProjetRef.current);
  }, []);

  return (
    <div ref={newProjetRef} id="projet" className="Projets">
      <div className="projet">
        <h1 className="titre">API REST (Crud) ProfDev</h1>
        <img src={Projet3} alt="API Rest" className="projet-img" />
        <p>
          <p>
            API REST de type CRUD développée avec Node.js, Express, MongoDB,
            Mongoose, JWT et GoogleAuth. Pour le frontend, j'ai utilisé React et
            CSS. Cette API permet de gérer les utilisateurs ainsi que leurs
            posts. Elle inclut des fonctionnalités d'authentification sécurisée.
          </p>
        </p>
        <div className="links">
          <a href="#" className="gray-link" target={"_blank"}>
            <img src={icon_domaine} alt="" className="img" />
          </a>
          <a href="#" className="black-link" target={"__blank"}>
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Jeu MMORPG - DR</h1>
        <img src={Projet2} alt="MMORPG - Jeu" className="projet-img" />
        <p>
          Création d'un jeu MMORPG en utilisant JavaScript, HTML, CSS, Github,
          API. Gestion des interactions utilisateur et des actions en temps
          réel. Le jeu comporte une architecture permettant une expansion future
          et une gestion dynamique des événements.
        </p>
        <div className="links">
          <a
            href="https://brahimcodea.github.io/JeuDuDragon/"
            target={"_blank"}
            className="gray-link"
          >
            <img src={icon_domaine} alt="" className="img" />
          </a>
          <a
            href="https://github.com/BrahimCodeA/JeuDuDragon"
            className="black-link"
            target={"_blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Site E-commerce Animé</h1>
        <img src={Projet1} alt="Ecommerce" className="projet-img" />
        <p>
          Projet e-commerce style manga développé avec une stack composée de
          Python, Django, MySQL, API, PythonAnywhrere et Tailwind CSS.
          Intégration complète de la gestion des utilisateurs, de
          l'authentification sécurisée et de la gestion de la base de données.
        </p>
        <div className="links">
          <a
            href="https://dekubrahim.pythonanywhere.com/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />
          </a>
          <a
            href="https://github.com/BrahimCodeA/django-projet"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projet;
