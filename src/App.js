import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/Featured";
import VenueNFO from "./components/VenueNFO";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Header_Footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "1500px",
          background: "cornflowerwhite"
        }}
      >
        <Header />
        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venuenfo">
          <VenueNFO />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
