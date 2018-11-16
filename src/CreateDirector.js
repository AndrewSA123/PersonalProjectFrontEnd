import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import axios from 'axios';
import ReactDOM from 'react-dom';

class CreateDirector extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Movie"
        });
    }





    async createDirector(){
        var url = "http://localhost:8080/movieAPI/rest/director/createdirector";
        var data = {
            name:document.getElementById('nameInput').value,
            age:document.getElementById('ageInput').value
        };
        axios.post(url, data).then((res) => {window.location.reload()});


    }



  render() {
    return (
      <div className="CreateMovie">
          <br/>
          <input id='nameInput' type='text' placeholder='Enter Name' className="form-control"/><br/>
          <p>Age</p>
          <input id='ageInput' type='number' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.createDirector()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }

}
export default CreateDirector;
