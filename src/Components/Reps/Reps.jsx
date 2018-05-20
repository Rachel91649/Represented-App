import React, { Component } from 'react';


class Reps extends Component { 
  constructor() {
    super();
    this.state = {
      allreps: []
    }
  }


  //axios call to get all reps
  
  render() {
    return(
      <div>
        <h1>All Reps Page</h1>
      </div>
    )
  }
};

export default Reps;