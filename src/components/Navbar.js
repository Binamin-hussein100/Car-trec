import React from "react";
import {NavLink} from 'react-router-dom'


function Navbar(){
    return (
        <nav>
            <div className="logo">
                <NavLink to='/'>
                    CarTrec
                </NavLink>                
            </div>

            <div className="links">
               <NavLink to="/cars" >Cars</NavLink>
               <NavLink to='/about'>About us</NavLink>
            </div>
        
        </nav>
    )
}

export default Navbar