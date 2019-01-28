import React from "react";

export default function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.576737643168!2d72.81823048562165!3d18.94965777929948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1bbc806f01%3A0x2ec42768fb318cb7!2sTaraporevala+Aquarium!5e0!3m2!1sen!2sin!4v1548668698758"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{
          border: "0px"
        }}
        allowFullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}
