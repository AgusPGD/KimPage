import React from "react";
import "./boton.css"
import textura from '/src/assets/fondoKim.png'
function BotonCarta(){
const abrirMenu =() =>{
    window.open("https://uqr.to/zkci");
}
const styles = {
    fondo:{
        backgroundImage: `url(${textura})`,
    }
}
    return(
        <div onClick={abrirMenu} className="contenedorPrincipalBoton" style={styles.fondo}>
            <h3> Abrir La Carta</h3>
        </div>

    )
}

export default BotonCarta;