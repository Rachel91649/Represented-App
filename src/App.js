import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Reps from './Components/Reps/Reps';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          Loging/Register
        </nav>
        <h1>This is my homepage</h1>
        <Reps />
      </div>
    );
  }
}

export default App;
