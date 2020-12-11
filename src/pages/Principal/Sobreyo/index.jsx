import React from "react";
import './index.css';
import "../../../components/titulo/index";
import Titulo from "../../../components/titulo/index";
import "../../../components/titulo/Navegacion/index";
import Navegacion from "../../../components/titulo/Navegacion/index";

function Sobreyo() {
  return (
    <div>
    <header class="cabezal"> <Navegacion/>  <Titulo/> </header>
    <section class="resto"><h1 class="titul">Eu sou um chico que moro em Argentina, Puerto Iguazu</h1>
    <div><img src="iguazu.jpg" alt="iguazu" class="igu" /></div>
    </section>
    </div>
  );
}

export default Sobreyo;