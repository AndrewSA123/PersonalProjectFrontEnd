import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CreateMovie  from './CreateMovie';
import UpdateMovie from './UpdateMovie';

class MovieTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Movie",
            updateType: "Update Movie"
        });
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

createFunction = () => {
  ReactDOM.render(<CreateMovie />, document.getElementById('createDiv'));
}
updateFunction = () => {
  ReactDOM.render(<UpdateMovie />, document.getElementById('createDiv'));
}


  render() {
    return (
      <div className="movieTable">

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search>
            <TableHeaderColumn dataField='mid' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='aid' dataFormat={this.showDescription}>Actor</TableHeaderColumn>
            <TableHeaderColumn dataField='did' dataFormat={this.showDescription}>Director</TableHeaderColumn>
            <TableHeaderColumn dataField='gid' dataFormat={this.showDescription}>Genre</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}></TableHeaderColumn>
          </BootstrapTable>    

          <div id="createDiv">
            <button id="CreateButton" className="btn btn-success" onClick={() => this.createFunction()}>{this.state.type}</button><br/>
            <button id="UpdateButton" className="btn btn-info" onClick={() => this.updateFunction()}>{this.state.updateType}</button>
          </div>
      </div>
    );
  }

}
export default MovieTable;
