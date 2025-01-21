import React from "react";
import PropTypes from "prop-types";
import textura from "/src/assets/TEXTURANOBORRAR.jpg"
import "./customScrollBar.css";

function CardPopUp(props) {
  const styles = {
    contenedorPrincipal: {
      width: "90%",
      height: "auto",
      maxWidth: "700px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px #222",
      display: "flex",
      flexDirection: "column",
      backgroundImage: `url(${textura})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    contenedorHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxHeight: "20%",
      padding: "10px 10px 10px 0px",
      width: "100%",
    },
    titulo: {
      margin: 0,
      textAlign: "center",
      flexGrow: 1,
    },
    botonCerrado: {
      position: "relative",
      borderRadius: "100%",
      width: "20px",
      height: "20px",
      backgroundImage: `url(${textura})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      boxShadow: "0px 0px 5px black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    iconoX: {
      width: "12px",
      height: "12px",
      fill: "none",
      stroke: "rgb(0, 0, 0)",
      strokeWidth: "50px",
    },
    contenedorImg: {
      height: "25vh",
      marginBottom: "3%",
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
    contenedorTexto: {
      width: "100%",
      maxHeight: "150px",
      overflowY: "auto",
      marginBottom: "10px",
      borderRadius: "5px",
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
    },
    textoDescripcion: {
      margin: 0,
      wordWrap: "break-word",
    },
  };
const cerrar = () =>{
  let popupContainer = document.getElementById("popup-root");
  const handleClose = () => {
    popupContainer.unmount(); 
  };
}
return (
  <div style={styles.contenedorPrincipal}>
    <div style={styles.contenedorHeader}>
      <h5 style={styles.titulo}>{props.titulo}</h5>
      <div style={styles.botonCerrado} onClick={props.onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={styles.iconoX}
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
    </div>
    <div style={styles.contenedorImg}>
      <img style={styles.img} src={props.img} alt="Imagen" />
    </div>
    <div style={styles.contenedorTexto} className="contenedorTexto">
      <p style={styles.textoDescripcion}>{props.texto}</p>
    </div>
  </div>
);
}

CardPopUp.propTypes = {
titulo: PropTypes.string,
texto: PropTypes.string,
img: PropTypes.string,
onClose: PropTypes.func.isRequired, // Asegura que la función de cierre es obligatoria
};


export default CardPopUp;
