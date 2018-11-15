import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

class MovieTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            movieArray: [],
            actorArray: [],
            genreArray: [],
            directorArray: []
        });
    }

    componentDidMount(){
      this.refreshMovieTable();
      this.refreshActorTable();
      this.refreshDirectorTable();
      this.refreshGenreTable();
    }

    createDeleteButton = (cell, rows) => {
        return <button id={rows.mid} className="btn btn-danger" onClick={() => this.deleteMovie(rows.mid)}>Delete</button>;
    }

    deleteMovie = (event) => {
      var url = "http://localhost:8080/movieAPI/rest/movie/deletemovie/" + event;
      axios.delete(url).then((res) => {window.location.reload()});
    }

    showDescription = (cell, row) => {
      return cell.name;
    }

refreshDirectorTable = () => {
  var url = "http://localhost:8080/movieAPI/rest/director/getalldirectors";
  axios.get(url).then(res => {
    this.setState({
      directorArray: res.data
    });
  });
}

refreshGenreTable = () => {
  var url = "http://localhost:8080/movieAPI/rest/genre/getallgenres";
  axios.get(url).then(res => {
    this.setState({
      genreArray: res.data
    });
  });
}

refreshActorTable = () => {
  var url = "http://localhost:8080/movieAPI/rest/actor/getallactors";
  axios.get(url).then(res => {
    this.setState({
      actorArray: res.data
    });
  });
}

refreshMovieTable = () => {
  var url = "http://localhost:8080/movieAPI/rest/movie/getallmovies";
  axios.get(url).then(res => {
    this.setState({
      movieArray: res.data
    });
  });
}

chooseTable(event){
if(event === "movie" || event === null){
  document.getElementsByClassName('table').data = this.state.movieArray;
}else if(event === "actor"){
  document.getElementsByClassName('table').data = this.state.actorArray;
}else if(event === "genre"){
  document.getElementsByClassName('table').data = this.state.genreArray;
}else if(event === "director"){
  document.getElementsByClassName('table').data = this.state.directorArray;
}

}

  render() {
    return (
      <div className="movieTable">

          <button className="btn btn-primary" onClick={this.chooseTable("movie")}>Movies</button>
          <button className="btn btn-primary" onClick={this.chooseTable("director")}>Directors</button>
          <button className="btn btn-primary" onClick={this.chooseTable("genre")}>Genres</button>
          <button className="btn btn-primary" onClick={this.chooseTable("actor")}>Actors</button>

          <BootstrapTable id="tableList" data={this.state.movieArray} className="table table-striped" search>
            <TableHeaderColumn dataField='mid' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='aid' dataFormat={this.showDescription}>Actor</TableHeaderColumn>
            <TableHeaderColumn dataField='did' dataFormat={this.showDescription}>Director</TableHeaderColumn>
            <TableHeaderColumn dataField='gid' dataFormat={this.showDescription}>Genre</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}></TableHeaderColumn>

          
          </BootstrapTable>    
      </div>
    );
  }
}

export default MovieTable;
