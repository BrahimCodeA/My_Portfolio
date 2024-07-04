import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projet from "./Components/Projet/Projet";
import Skills from "./Components/Skills/Skills";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp/ScrollUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <Title subTitle="About" title="À Propos De Moi" />
        <About />
        <Title subTitle="Skills" title="Mes Compétences" />
        <Skills />
        <Title subTitle="Projet" title="Mes Projets" />
        <Projet />
        <Title subTitle="Contact" title="Me Contacter" />
        <Contact />
      </div>
      <hr />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;
