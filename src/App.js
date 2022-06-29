import React,{useState} from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from './components/Navbar';
import About from './components/About';
import Cars from './components/Cars';
import './index.css';



function App() {
  const [cars, setCars] = useState([])

  return (    
        <div id="grandmaster">
          <Navbar/>
          <div id='motherPage'>
            <Switch>
              <Route exact path="/">
                  <Homepage/>
              </Route>
              <Route  path="/about">
                  <About/>
              </Route>
              <Route  path="/cars">
                  <Cars cars={cars} setCars = {setCars}/>
              </Route>
            </Switch>
          </div>      
      </div>      
      
  )
}

export default App;
