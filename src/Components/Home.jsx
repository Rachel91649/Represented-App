import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './Nav';


class Home extends Component { 
  constructor(){
    super();

  }
  render() {
    return (
      <div>
        <Nav />
        <h1>Home Page</h1>
        
      
        <p>page should have nav bar</p>
        <p>This page is will house the map</p>
      </div>
    )
  }
};

export default Home;
