import React from "react";
import "./whatsappboton.css";

const BotonWhatsapp = ({ phoneNumber}) => {
  const redirectToWhatsApp = () => {
    const encodedMessage = encodeURIComponent();
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={redirectToWhatsApp}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </div>
  );
};

export default BotonWhatsapp;
