import React from "react";
import Carousel from "./Carousel";
import Countdown from "./Countdown";

export default function Featured() {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana grande</div>
      </div>
      <Countdown />
    </div>
  );
}
