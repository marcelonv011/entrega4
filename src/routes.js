import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

//Paginas de rotas
import Principal from "./pages/Principal/index";
import Sobreyo from "./pages/Principal/Sobreyo/index";
import PageNotFound from "./pages/Principal/Paginanoencontrada/index"

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route path="/principal" component={Principal} />
        <Route path="/sobreyo" component={Sobreyo} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
export default routes;