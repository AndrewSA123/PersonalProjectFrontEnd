import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CreateMovie  from './CreateMovie';
import UpdateMovie from './UpdateMovie';
import Image from './image.js';

class MovieTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Movie",
            updateType: "Update Movie",
            port: 8080,
            data:[],
            imagesvar: "",
            IP: "http://35.242.149.138:"
        });
    }

    componentDidMount(){
      // this.showImages();
    }


    createDeleteButton = (cell, rows) => {
        return <button id={rows.mid} className="btn btn-danger" onClick={() => this.deleteMovie(rows.mid)}>Delete</button>;
    }

    deleteMovie = (event) => {
      var url = this.state.IP + this.state.port + "/movieAPI/rest/movie/deletemovie/" + event;
      axios.delete(url).then((res) => {window.location.reload()});
    }

    showDescription = (cell, row) => {
      return cell.name;
    }
    createUpdateButton = (cell, rows) => {
        return <button id={rows.mid} className="btn btn-warning" onClick={() => this.updateFunction(rows)}>Update</button>;
    }

createFunction = () => {
  ReactDOM.render(<CreateMovie />, document.getElementById('createDiv'));
}
updateFunction = (event) => {
  ReactDOM.render(<UpdateMovie info={event}/>, document.getElementById('createDiv'));
}

showImages (cell, rows){
 return <Image imageSrc={rows.title} />
}


  render() {
    return (
      <div className="movieTable" >

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search scrollable >
            <TableHeaderColumn width={'5%'} dataField='mid' isKey dataSort dataAlign='center'>ID</TableHeaderColumn>
            <TableHeaderColumn dataFormat={this.showImages.bind(this)} dataAlign='center'>Image</TableHeaderColumn>
            <TableHeaderColumn tdStyle={{ whiteSpace: 'unset' }} dataField='title' dataSort dataAlign='center'>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='aid' dataFormat={this.showDescription} dataAlign='center'>Actor</TableHeaderColumn>
            <TableHeaderColumn dataField='did' dataFormat={this.showDescription} dataAlign='center'>Director</TableHeaderColumn>
            <TableHeaderColumn dataField='gid' dataFormat={this.showDescription} dataAlign='center'>Genre</TableHeaderColumn>
            <TableHeaderColumn dataField='updateButton' dataFormat={this.createUpdateButton} dataAlign='center'></TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>  
          </BootstrapTable>    

          <div id="createDiv">
            <button id="CreateButton" className="btn btn-success" onClick={() => this.createFunction()}>{this.state.type}</button><br/>
          </div>
      </div>
    );
  }

}
export default MovieTable;
