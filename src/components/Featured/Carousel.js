import React from "react";
import Slider from "react-slick";
import slideone from "../../resources/images/slide_one.jpg";
import slidetwo from "../../resources/images/slide_two.jpg";
import slidethree from "../../resources/images/slide_three.jpg";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        background: "red",
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slideone})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slidetwo})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slidethree})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
}
