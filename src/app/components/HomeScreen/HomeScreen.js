import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../NavBar/Nav";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
