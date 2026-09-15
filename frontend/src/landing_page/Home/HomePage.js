import React from "react";
import Hero from "./hero";
import Stats from "./stats";
import Pricing from "./pricing";
import Education from "./education";
import Awards from "./awards";
import OpenAccount from "../openAccount";
import Navbar from "../navbar";
import Footer from "../footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
