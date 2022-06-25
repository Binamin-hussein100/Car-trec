import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from './components/Navbar';
import About from './components/About';
import Cars from './components/Cars';


function App() {
  return (    
        <>
          <Navbar/>
          <div>
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
      </>      
      
  )
}

export default App;
