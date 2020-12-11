import React from "react";
import './index.css';
import "../../components/titulo/index";
import Titulo from "../../components/titulo/index";
import "../../components/titulo/Navegacion/index";
import Navegacion from "../../components/titulo/Navegacion/index";
import Formulario from "../../components/titulo/Formulario/index";

function Principal() {
  return (
    <div>
    <header class="cabezal"> <Navegacion/>  <Titulo/> </header>
    <section class="resto"><Formulario/></section>
    </div>
  );
}

export default Principal;
