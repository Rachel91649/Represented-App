import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Landing from './Components/Landing';
import Reps from './Components/Reps/Reps';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          Loging/Register
        </nav>
        {/* <Landing /> */}
        <Route exact={true} path="/" component={Landing}/>
        {/* <Reps /> */}
        <Route path="/reps" component={Reps}/>
      </div>
    );
  }
}

export default App;
