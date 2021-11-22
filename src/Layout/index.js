import React from "react";
import Header from "../components/menu/Header";
import Home from "../components/home";
import Card from "../components/Card/Card";

function index() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Card />
    </React.Fragment>
  );
}

export default index;
