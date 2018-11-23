import React, { Component } from 'react';
import axios from 'axios';

class CreateActor extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Actor",
            port: 8080,
            IP: "http://35.242.149.138:"
        });
    }





    async createActor(){
        var url = this.state.IP + this.state.port + "/movieAPI/rest/actor/createactor";
        var data = {
            name:document.getElementById('nameInput').value,
            age:document.getElementById('ageInput').value
        };
        axios.post(url, data).then((res) => {window.location.reload()});


    }



  render() {
    return (
      <div className="CreateActor">
          <br/>
          <input id='nameInput' type='text' placeholder='Enter Name' className="form-control"/><br/>
          <p>Age</p>
          <input id='ageInput' type='number' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.createActor()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }

}
export default CreateActor;
