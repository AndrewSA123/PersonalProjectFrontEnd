import React, { Component } from 'react';
import './App.css';
import MovieTable from './MovieTable.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      buttonName:"Refresh Table"
    }
  }




  render() {
    return (
      <div className="App">
        <MovieTable />
      </div>
    );
  }
}

export default App;
