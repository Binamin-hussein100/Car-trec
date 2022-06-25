import React from "react";
import {NavLink} from 'react-router-dom'


function Navbar(){
    return (
        <nav>
            <div class="logo">
                <NavLink to='/'>
                    CarTrec
                </NavLink>                
            </div>

            <div class="links">
               <NavLink to="/cars" >Cars</NavLink>
               <NavLink to='/about'>About us</NavLink>
            </div>
        
        </nav>
    )
}

export default Navbar