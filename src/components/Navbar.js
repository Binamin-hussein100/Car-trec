import React from "react";
import {Link} from 'react-router-dom'


function Navbar(){
    return (
        <nav>
            <div className="logo">
                <Link to='/'>
                    CarTrec
                </Link>                
            </div>

            <div className="links">
               <Link to="/cars" >Cars</Link>
               <Link to='/about'>Add A CAR</Link>
            </div>
        
        </nav>
    )
}

export default Navbar