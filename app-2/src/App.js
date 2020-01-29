import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();


    this.state = {
      colors:['red', 'blue', 'yellow', 'green', 'purple']
    };
  }

  render() {
      let colorsToDisplay = this.state.colors.map((element,index) => {
        return <h2 key = {index} > {element} </h2>;
      });

  return <div className ='App'> {colorsToDisplay} </div>;

  }
}

export default App;
