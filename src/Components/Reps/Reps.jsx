import React, { Component } from 'react';
import axios from 'axios';
import Api_Key from '../../secret.js';

let key = process.env.PROPUBLICA_KEY;
console.log(Api_Key);//now I've got my api key
console.log(process.env.JWT_SECRET);


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
    {'headers': { 'X-API-Key': Api_Key}})
    .then((response => {
      console.log(response.data.results[0].members);
    }))
   
 }
 
 componentDidMount() {
   this.getAllHouseMemebers();
   console.log(key);
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