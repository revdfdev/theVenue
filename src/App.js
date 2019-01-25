import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/Featured";

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "1500px",
          background: "cornflowerblue"
        }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
