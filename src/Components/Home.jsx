import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './Nav';


const Home = ({}) => {
  return(
    <div>
      <Nav />
      <h1>Home Page</h1>
      
      {/* <nav>
        <Link to="/reps">reps</Link>
      </nav> */}
      <p>page should have nav bar</p>
      <p>This page is will house the map</p>
    </div>
  )
};

export default Home;