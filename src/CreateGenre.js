import React, { Component } from 'react';
import axios from 'axios';

class CreateGenre extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Genre",
            port: 8080,
            IP: "http://35.233.28.63:"
        });
    }

    async createGenre(){
        var url = this.state.IP + this.state.port + "/movieAPI/rest/genre/creategenre";
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
