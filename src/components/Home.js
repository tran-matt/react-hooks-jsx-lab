import React from "react";
import { name, city } from "../data/data.js";

function Home() {

  const h1Style = {
          color: 'firebrick',
    };

  // update the JSX being returned!
  return (
  <div id="home">
    Home
    <h1 style={h1Style}>{name} is a Web Developer from {city}</h1>
    </div>
  );
};

export default Home;
