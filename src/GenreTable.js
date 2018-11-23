import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CreateGenre from './CreateGenre.js';

class GenreTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Genre",
            port: 8080,
            IP: "http://35.233.28.63/"
        });
    }


    createDeleteButton = (cell, rows) => {
        return <button id={rows.mid} className="btn btn-danger" onClick={() => this.deleteMovie(rows.gid)}>Delete</button>;
    }

    deleteMovie = (event) => {
      var url = this.state.IP + this.state.port + "/movieAPI/rest/genre/deletegenre/" + event;
      axios.delete(url).then((res) => {window.location.reload()});
    }

    showDescription = (cell, row) => {
      return cell.name;
    }
    createFunction = () => {
        ReactDOM.render(<CreateGenre />, document.getElementById('createDiv'));
    }


refreshGenreTable = () => {
  var url = this.state.IP + this.state.port + "/movieAPI/rest/genre/getallgenres";
  axios.get(url).then(res => {
    this.setState({
      genreArray: res.data
    });
  });
}




  render() {
    return (
      <div className="movieTable">

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search>
            <TableHeaderColumn dataField='gid' isKey dataSort dataAlign='center'>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort dataAlign='center'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>
          </BootstrapTable>    
          <div id="createDiv"><button id="CreateButton" className="btn btn-success" onClick={() => this.createFunction()}>{this.state.type}</button></div>

      </div>
    );
  }

}
export default GenreTable;
