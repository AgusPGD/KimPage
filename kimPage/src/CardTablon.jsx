import React from "react";
import PropTypes from "prop-types";
import textura from "./TEXTURANOBORRAR.jpg"
import CardPopUp from "./CardPopUp";
import * as ReactDOM from 'react-dom/client'

function CardTablon(props) {
  const styles = {
    contenedorPrincipal: {
      width: "20vw",
      height: "auto",
      minWidth: "150px",
      minHeight: "100px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px #222",
      display: "flex",
      flexDirection: "column",
      backgroundImage: `url(${textura})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginLeft: "20px",
      marginBottom:"20px",
      cursor:"pointer",
    },
    contenedorHeader: {
      display: "flex",
      alignItems: "center",
      maxHeight: "20%",
      alignContent: "center",
      alignSelf: "center",
      flexDirection: "column",
      width: "100%",
    },
    pelota: {
      borderRadius: "100%",
      width: "10px",
      height: "10px",
      backgroundColor: "aqua",
      boxShadow:
        "inset 4px 0px 3px rgba(14, 14, 14, 0.2), 0px 0px 10px black",
      marginBottom: "3px",
    },
    contenedorHeaderTexto: {
      width: "100%",
      height: "10%",
      backgroundColor: "rgba(91, 59, 39, 0.5)",
      marginBottom: "10px",
    },
    headerTexto: {
      margin: "1%",
      textAlign: "center",
    },
    contenedorImg: {
      height: "10vh",
      marginBottom: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1px",
      boxShadow: "0px 0px 2px #222",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    popupRoot :{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.6)", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
    popupRoot2 :{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0)", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
  };

  const popUp = (texto, titulo, img) => {
    let popupContainer = document.getElementById("popup-root");

    if (!popupContainer) {
      popupContainer = document.createElement("div");
      popupContainer.id = "popup-root";
      document.body.appendChild(popupContainer);
    }

    popupContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      visibility: visible;
      opacity: 1;
      transition: visibility 0.3s, opacity 0.3s;
    `;

    const root = ReactDOM.createRoot(popupContainer);

    const closePopup = () => {
      popupContainer.style.visibility = "hidden";
      popupContainer.style.opacity = "0";
      setTimeout(() => root.unmount(), 300); // Espera a la transición antes de desmontar
    };

    root.render(
      <CardPopUp texto={texto} titulo={titulo} img={img} onClose={closePopup} />
    );
  };
  
  return (
    <div onClick={()=> popUp(props.texto , props.h2texto , props.img)} style={styles.contenedorPrincipal}>
      <div style={styles.contenedorHeader}>
        <div style={styles.pelota}></div>
        <div style={styles.contenedorHeaderTexto}>
          <h4 style={styles.headerTexto}>{props.h2texto}</h4>
        </div>
      </div>
      <div style={styles.contenedorImg}>
        <img style={styles.img} src={props.img} alt="Contenido" />
      </div>
    </div>
  );
}

CardTablon.propTypes = {
  texto: PropTypes.string,
  h2texto: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
};

export default CardTablon;
