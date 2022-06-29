import React from "react";
import {NavLink} from 'react-router-dom'
import pic1 from "../Premium_Vector___Modern_and_sport_car_illustration-removebg-preview.png"

function Homepage() {
  return (
    <div >
      
        <div id="master">
            
            <div id="gari">
                <div>
                  <img className="ginda" src={pic1} alt="cartreck1"/>            
                </div>
                <div id="ninja">
                    <h1 >
                        Car-<span id="trec">Treck</span>
                    </h1>
                    <p>
                      THE BEST CAR DEALS AND ONLINE SHOWROOM
                    </p>
                    <NavLink to="/cars" ><button id="shop">
                    <span className="actual-text">&nbsp;SHOP&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;SHOP&nbsp;</span>
                    </button></NavLink>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Homepage;
