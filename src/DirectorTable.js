import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CreateDirector from './CreateDirector.js';

class DirectorTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Director",
            port: 8080,
            IP: "https://35.233.28.63/"
        });
    }


    createDeleteButton = (cell, rows) => {
        return <button id={rows.mid} className="btn btn-danger" onClick={() => this.deleteMovie(rows.did)}>Delete</button>;
    }

    deleteMovie = (event) => {
      var url = this.state.IP + this.state.port + "/movieAPI/rest/director/deletedirector/" + event;
      axios.delete(url).then((res) => {window.location.reload()});
    }

    showDescription = (cell, row) => {
      return cell.name;
    }
    createFunction = () => {
        ReactDOM.render(<CreateDirector />, document.getElementById('createDiv'));
    }





  render() {
    return (
      <div className="movieTable">

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search>
            <TableHeaderColumn dataField='did' isKey dataSort dataAlign='center'>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort dataAlign='center'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='age' dataSort dataAlign='center'>Age</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>
          </BootstrapTable>
          <div id="createDiv"><button id="CreateButton" className="btn btn-success" onClick={() => this.createFunction()}>{this.state.type}</button></div>

      </div>
    );
  }

}
export default DirectorTable;
