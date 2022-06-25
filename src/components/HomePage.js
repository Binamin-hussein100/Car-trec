import React from "react";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div id="grandmaster">
        <Navbar/>
        <div id="master">
            <h1>
                Car-Treck
            </h1>
            <div>
                <img src="src/statics/1968 Dodge Charger.jpeg" alt="cartreck1"/>
            </div>
        </div>
    </div>
  );
}

export default Homepage;
