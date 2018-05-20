import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';


// ====== COMPONENTS ====== \\
import Landing from './Components/Landing';
import Home from './Components/Home';
import Reps from './Components/Reps/Reps';
import Rep_Profile from './Components/Reps/Rep_Profile';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Landing /> */}
        <Route exact={true} path="/" component={Landing}/>

        <Route path="/home" component={Home} />

        {/* <Reps /> */}
        <Route exact={true} path="/reps" component={Reps}/>
        <Route path="/reps/rep/:id" component={Rep_Profile} />
      </div>
    );
  }
}

export default App;
