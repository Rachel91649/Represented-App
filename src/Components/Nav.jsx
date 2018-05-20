import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


const Nav = ({}) => {
  return(
    <div>
      <nav>
        <Link to="/reps">reps</Link>
        {/* add links for home, profile, stats? login/logout */}
      </nav>

    </div>
  )
};

export default Nav;