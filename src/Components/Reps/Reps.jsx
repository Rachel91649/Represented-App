import React, { Component } from 'react';
import axios from 'axios';

class Reps extends Component { 
  constructor() {
    super();
    this.state = {
      allreps: []
    }
  }


  //axios call to get all reps
 getAllHouseMemebers = () => {
  axios.get('https://api.propublica.org/congress/v1/102-115/house/members.json', 
    {'headers': { 'X-API-Key': 'mSmCDaN4zhN32elyOcV7RbA4z0VmeAXmFpTKICzy'}})
    .then((response => {
      console.log(response);
    }))
 }
 componentDidMount() {
   this.getAllHouseMemebers();
 }
  render() {
    return(
      <div>
        <h1>All Reps Page</h1>
      </div>
    )
  }
};

export default Reps;