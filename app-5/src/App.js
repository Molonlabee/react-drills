import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.pinimg.com/originals/ac/3c/52/ac3c524a774ebf943d2be23e77a02ad7.jpg"} />
      </div>
    );
  }
}

export default App;