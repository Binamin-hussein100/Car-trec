import React,{useState} from "react";
import './App.css';
// import { Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from './components/Navbar';
import About from './components/About';
import Cars from './components/Cars';
import './index.css';

import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [cars, setCars] = useState([])

  return (    
        <div id="grandmaster">
          <Navbar/>
          <Routes>
          
              <Route  path="/Car-trec" element={<Homepage/>}/>
              <Route  path="/about" element={<About />}/>
              <Route  path="/cars" element={<Cars cars={cars} setCars = {setCars}/>}/>
           
          </Routes>
            
      </div>      
      
  )
}

export default App;
