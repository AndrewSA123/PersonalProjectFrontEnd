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
      buttonName:"Refresh Table",
      port: 8080,
      IP: "https://35.233.28.63/"
    }
  }

  componentDidMount(){
    this.renderMovies();
  }

  renderMovies = () => {
    var url = this.state.IP + this.state.port + "/movieAPI/rest/movie/getallmovies";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<MovieTable classData={response}/>, document.getElementById('tables'));
    });
  }
  renderDirectors = () => {
        var url = this.state.IP + this.state.port + "/movieAPI/rest/director/getalldirectors";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<DirectorTable classData={response} />, document.getElementById('tables'));
    });
  }
  renderGenres = () => {
    var url = this.state.IP + this.state.port + "/movieAPI/rest/genre/getallgenres";
    var response;
    
    axios.get(url).then((res) => {
      response = res.data;
      ReactDOM.render(<GenreTable classData={response}/>, document.getElementById('tables'));
    });
  }
  renderActors = () => {
    var url = this.state.IP + this.state.port + "/movieAPI/rest/actor/getallactors";
    var response;
    axios.get(url).then((res) => {
      response = res.data;
        ReactDOM.render(<ActorTable classData={response} />, document.getElementById('tables'));
    });
  }


  render() {
    return (
      <div className="App">
          <button className="btn btn-primary" onClick={() => this.renderMovies()}><i className="fas fa-film" style={{width:'60px', height:'35px'}}></i></button>
          <button className="btn btn-primary" onClick={() => this.renderDirectors()}><i className="fas fa-video" style={{width:'60px', height:'35px'}}></i></button>
          <button className="btn btn-primary" onClick={() => this.renderActors()}><i className="fas fa-user" style={{width:'60px', height:'35px'}}></i></button>
          <button className="btn btn-primary" onClick={() => this.renderGenres()}><i className="far fa-surprise" style={{width:'60px', height:'35px'}}></i></button>
          <div id="tables">
            <MovieTable />
          </div>
      </div>
    );
  }
}

export default App;
