import React, {Component, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "./HomePage";
import ContactPage from "./Contact";
import Navigation from "./Navigation";
import HorsensRental from "./Pages/HorsensRental";
import SitePlan from "./Pages/SitePlan";
import PlanDrawing from "./Pages/PlanDrawing";


export default function App() {
  return (
      <Router>
        <div className='pdfImage'>
          <Navigation/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/horsensrental' component={HorsensRental}></Route>
            <Route path='/siteplan' component={SitePlan}></Route>
              <Route path='/plandrawing' component={PlanDrawing}></Route>

            <Route path='/contact' component={ContactPage}></Route>
          </Switch>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
