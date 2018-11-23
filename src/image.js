import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CreateMovie  from './CreateMovie';
import UpdateMovie from './UpdateMovie';

class Image extends Component {
    constructor(props){
        super(props);
        this.state = ({
            image:this.props.imageSrc,
            imageUrl: ""
        });
    }
    componentWillMount(){
        axios.get("http://www.omdbapi.com/?t=" + this.state.image + "&apikey=5f41a62d").then(res => {
            this.setState({imageUrl: res.data.Poster});
        })
    }



  render() {
    return (
        <img src={this.state.imageUrl} style={{height: '50%', width: '80%'}}/>
    );
  }

}
export default Image;
