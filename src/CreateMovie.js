import React, { Component } from 'react';
import axios from 'axios';

class CreateMovie extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Create Movie",
            port: 8080,
            IP: "http://35.242.149.138:"
        });
    }

    componentDidMount(){
        {this.populateList()}
    }



    populateList = () => {
        var genrelist = document.getElementById('genresList');
        var actorlist = document.getElementById('actorsList');
        var directorlist = document.getElementById('directorsList');
        var genreUrl = this.state.ip + this.state.port + "/movieAPI/rest/genre/getallgenres";
        var directorUrl = this.state.ip + this.state.port + "/movieAPI/rest/director/getalldirectors";
        var actorUrl = this.state.ip + this.state.port + "/movieAPI/rest/actor/getallactors";
        axios.get(genreUrl).then((res) => {
            for(var i = 0; i <= res.data.length -1; i++){
                var option = document.createElement("option");
                option.id = res.data[i].gid;
                option.text = res.data[i].name;
                option.value = res.data[i].gid;
                genrelist.appendChild(option);
            }
        });
        axios.get(directorUrl).then((res) => {
            for(var i = 0; i <= res.data.length -1; i++){
                var option = document.createElement("option");
                option.id = res.data[i].did;
                option.text = res.data[i].name;
                option.value = res.data[i].gid;
                directorlist.appendChild(option);
            }
        });
        axios.get(actorUrl).then((res) => {
            for(var i = 0; i <= res.data.length -1; i++){
                var option = document.createElement("option");
                option.id = res.data[i].aid;
                option.text = res.data[i].name;
                option.value = res.data[i].gid;
                actorlist.appendChild(option);
            }
        });
    }

    async createMovie(){
        var genreid = document.getElementById('genresList').options;
        var actorid = document.getElementById('actorsList').options;
        var directorid = document.getElementById('directorsList').options;
        var url = this.state.ip + this.state.port + "/movieAPI/rest/movie/createmovie";
        var genreUrl = this.state.ip + this.state.port + "/movieAPI/rest/genre/getgenre/" + genreid[genreid.selectedIndex].id;
        var directorUrl = this.state.ip + this.state.port + "/movieAPI/rest/director/getdirector/" + directorid[directorid.selectedIndex].id;
        var actorUrl = this.state.ip + this.state.port + "/movieAPI/rest/actor/getactor/" + actorid[actorid.selectedIndex].id;
        var titlevar = document.getElementById('titleInput').value;
        var aidvar = await axios.get(actorUrl).then((res) => {return res.data}); 
        var gidvar = await axios.get(genreUrl).then((res) => {return res.data}); 
        var didvar = await axios.get(directorUrl).then((res) => {return res.data}); 
        var data = {
            title:titlevar,
            aid:{aid:aidvar.ID,name:aidvar.name,age:aidvar.age},
            gid:{gid:gidvar.ID,name:gidvar.name},
            did:{did:gidvar.ID,name:didvar.name,age:didvar.age}
        };
        axios.post(url, data).then((res) => {window.location.reload()});


    }



  render() {
    return (
      <div className="CreateMovie">
          <br/>
          <input id='titleInput' type='text' placeholder='Enter Title' className="form-control"/><br/>
          <p>Genre</p>
          <select id='genresList' className="form-control"/><br/>
          <p>Director</p>
          <select id='directorsList' className="form-control"/><br/>
          <p>Actor</p>  
          <select id='actorsList' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.createMovie()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }

}
export default CreateMovie;
