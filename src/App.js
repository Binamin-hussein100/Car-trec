import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from './components/Navbar';
import About from './components/About';
import Cars from './components/Cars';
import './index.css';



function App() {
  return (    
        <div id="grandmaster">
          <Navbar/>
          <div id='motherPage'>
            <Switch>
              <Route exact path="/">
                  <Homepage/>
              </Route>
              <Route exact path="/about">
                  <About/>
              </Route>
              <Route exact path="/cars">
                  <Cars/>
              </Route>
            </Switch>
          </div>      
      </div>      
      
  )
}

export default App;
