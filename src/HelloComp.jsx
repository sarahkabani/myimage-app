import React, { Component } from 'react';
// import {image} from './good.png';

export default class HelloComponent extends Component{
  render(){
    return(
      <div>
       <h1><p>{this.props.message}</p></h1>
       <h3><p>we Love what we do,we feed our spirit and soul</p></h3>
       </div>
    );
  }
}
