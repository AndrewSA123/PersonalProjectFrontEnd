import React, { Component } from 'react';
import axios from 'axios';

class CreateDirector extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Movie",
            port: 8080
        });
    }





    async createDirector(){
        var url = "http://localhost:" + this.state.port + "/movieAPI/rest/director/createdirector";
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
