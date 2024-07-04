import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.png";
import localisation_icon from "../../assets/localisation_icon.png";
import tel_icon from "../../assets/tel_icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoie....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ed6e67b-9edd-47ab-a822-f69df450b44a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message bien envoyé !");
      event.target.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Pour me contacter</h1>
          <p>
            Je suis actuellement disponible, vous pouvez me contacter par
            téléphone, par email ou via linkedin.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>daoudi.ibrahimd@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={tel_icon} alt="" /> <p>+33 6 60 70 20 29</p>
            </div>
            <div className="contact-detail">
              <img src={localisation_icon} alt="" /> <p>Paris 20éme, France</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <input
            type="email"
            placeholder="Entrez votre Email"
            name="email"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Entrez votre message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Envoyer
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
