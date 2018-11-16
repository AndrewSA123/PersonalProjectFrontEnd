import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import axios from 'axios';
import ReactDOM from 'react-dom';

class CreateGenre extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Genre"
        });
    }





    async createGenre(){
        var url = "http://localhost:8080/movieAPI/rest/genre/creategenre";
        var data = {
            name:document.getElementById('nameInput').value
        };
        axios.post(url, data).then((res) => {window.location.reload()});


    }



  render() {
    return (
      <div className="CreateGenre">
          <br/>
          <input id='nameInput' type='text' placeholder='Enter Name' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.createGenre()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }

}
export default CreateGenre;
