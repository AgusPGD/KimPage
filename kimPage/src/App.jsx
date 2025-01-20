import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTablon from './CardTablon'
import CardPopUp from './CardPopUp'
import BotonCarta from './BotonCarta'
import * as ReactDOM from 'react-dom'
import BotonWhatsapp from './BotonWhatsapp'
function App() {



  return (
    <>
    <div className = "contenedorPrincipal">
    
      <div className="contenedorLogo">

      
        <h4 className="texto1">
        Disfruta del momento siempre en compania
        </h4>
        <div className = "logoKim">
            <img src="src/logoKim.png"></img>
            <h2>
            Kimberley
           </h2>
        </div>
        <h4 className="texto2">
        La Cocina de tu barrio siempre esperandote
        </h4>
        </div>
        <BotonCarta></BotonCarta>
        <h3 className="tablonTitulo">
            Tablon de Noticias
          </h3>
        <div className="contenedorTablon">
         
          <CardTablon texto="El Bodegón Kimberley, ubicado en el corazón de Villa Devoto, es mucho más que un lugar para disfrutar de buena comida; es un homenaje vivo a la rica historia del Kimberley Atlético Club, fundado en 1906, que dejó una marca imborrable en el fútbol amateur y hoy sigue destacándose en futsal. Inspirados en el legado de un club que alguna vez brilló en la Primera División y alcanzó hazañas en competencias internacionales, creamos un espacio donde tradición, sabor y comunidad se unen para ofrecer una experiencia única. En nuestro bodegón, cada plato está elaborado con dedicación y cariño, desde las generosas milanesas hasta los guisos que evocan los sabores de casa, buscando transmitir el mismo espíritu de compromiso y pasión que caracteriza al club. Con un ambiente cálido y familiar, este rincón se convierte en el lugar ideal para compartir risas, recordar anécdotas y sentirte parte de algo especial, como cuando Kimberley hacía historia en la cancha. Ya sea que vengas a disfrutar de una cena tranquila o de un encuentro entre amigos, en el Bodegón Kimberley te recibimos como en casa, con sabores que abrazan el alma y una atmósfera que celebra la esencia de lo auténtico y lo inolvidable." h2texto="¿QUIENES SOMOS?" img="src/patioKim.png" id={1}></CardTablon>
          <CardTablon texto="En el Bodegón Kimberley estamos aquí para acompañarte en tus momentos especiales y compartir lo mejor de nuestra cocina:

Martes a viernes: Te esperamos por las noches, de 20:00 a 24:00, para disfrutar de cenas relajadas y llenas de sabor.
Sábados: Viví lo mejor de los almuerzos familiares de 12:00 a 16:00, y si preferís algo más nocturno, también abrimos de 20:00 a 24:00.
Domingos: Cerramos la semana con almuerzos caseros de 12:00 a 16:00, ideales para compartir con los tuyos.
Sea cual sea el día, en Kimberly siempre te recibimos con los brazos abiertos, buena comida y ese ambiente familiar que tanto nos caracteriza. ¡Te esperamos!" h2texto="ESTAMOS ABIERTOS" img="src/cartelKim.png" id={2}></CardTablon>
          <CardTablon  texto="En el Bodegón Kimberley te ofrecemos sabores únicos que no te podés perder. Probá nuestras Papas Kimberley, con queso, panceta y verdeo; el increíble Bife, un bife de chorizo a la parrilla con provoleta, jamón y morrón; o la jugosa Bondiola a la BBQ, con salsa barbacoa y panceta.

Y, por supuesto, nuestra gran Milanga: un bife entero hecho milanesa acompañado de pastas a la carbonara. En Kimberley, cada plato es una experiencia. ¡Vení a disfrutar!" h2texto="ESPECIALIDADES" img="src/comidaKim.png" id={3}> </CardTablon>
          <CardTablon  texto="En el Bodegón Kimberley celebramos los pequeños placeres de la vida con nuestro Vermú Feriado, disponible en dos deliciosos sabores: Malbec y Rosé. Podés disfrutarlo como un trago para acompañar tus platos favoritos o llevar la experiencia al siguiente nivel con nuestra imperdible promo, que incluye la botella completa y un sifón de regalo." h2texto="FERIADO" img="src/feriadoProyecto.png" id={4}></CardTablon>
        </div>

    <BotonWhatsapp phoneNumber={5491167313676}></BotonWhatsapp>
    </div>

    </>
  )
}

export default App
