import React from "react";
import "./boton.css"
function BotonCarta(){
const abrirMenu =() =>{
    window.open("https://uqr.to/zkci");
}
    return(
        <div onClick={abrirMenu} className="contenedorPrincipalBoton">
            <h3> Abrir La Carta</h3>
        </div>

    )
}

export default BotonCarta;