import React, {Component, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "./HomePage";
import ContactPage from "./Contact";
import BookSelectHouse from "./BookSelectHouse";



export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/horsensrental">Horsens Rental</a></li>
              <li><a href="/attachedhouses">Attached houses</a></li>
              <li><a href="/location">Location</a></li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/attachedhouses">
              <AttachedHouses/>
            </Route>
            <Route path="/location">
               < ContactPage />
            </Route>
            <Route path="/horsensrental">
              <Test/>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function AttachedHouses() {
  return <h2>AttachedHouses</h2>;
}

function HorsensRental() {
  return <h2>Horsens Rental</h2>;
}

class Test extends Component
{
render() {
  return (
      <div>
        <h2>This is test case scenario</h2>
      </div>
  )
}
}
