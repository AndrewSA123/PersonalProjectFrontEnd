import React, { Component } from 'react';
import './App.css';
import MovieTable from './MovieTable.js';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ActorTable from './ActorTable.js';
import DirectorTable from './DirectorTable.js';
import GenreTable from './GenreTable.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      buttonName:"Refresh Table"
    }
  }

  componentDidMount(){
    this.renderMovies();
  }

  renderMovies = () => {
    var url = "http://localhost:8080/movieAPI/rest/movie/getallmovies";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<MovieTable classData={response} />, document.getElementById('tables'));
    });
  }
  renderDirectors = () => {
        var url = "http://localhost:8080/movieAPI/rest/director/getalldirectors";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<DirectorTable classData={response} />, document.getElementById('tables'));
    });
  }
  renderGenres = () => {
    var url = "http://localhost:8080/movieAPI/rest/genre/getallgenres";
    var response;
    axios.get(url).then((res) => {
      response = res.data;
      ReactDOM.render(<GenreTable classData={response} />, document.getElementById('tables'));
    });
  }
  renderActors = () => {
    var url = "http://localhost:8080/movieAPI/rest/actor/getallactors";
    var response;
    axios.get(url).then((res) => {
      response = res.data;
        ReactDOM.render(<ActorTable classData={response} />, document.getElementById('tables'));
    });
  }


  render() {
    return (
      <div className="App">
          <button className="btn btn-primary" onClick={() => this.renderMovies()}>Movies</button>
          <button className="btn btn-primary" onClick={() => this.renderDirectors()}>Directors</button>
          <button className="btn btn-primary" onClick={() => this.renderGenres()}>Genres</button>
          <button className="btn btn-primary" onClick={() => this.renderActors()}>Actors</button>
          <div id="tables">
            <MovieTable />
          </div>
      </div>
    );
  }
}

export default App;
