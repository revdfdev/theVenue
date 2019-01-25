import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";

export default function Countdown() {
  const [deadline] = useState("Dec, 16, 2019");
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const getTimeUntil = () => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      setSeconds(seconds);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      setMinutes(minutes);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      setHours(hours);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setDays(days);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getTimeUntil();
    }, 1000);
  });

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{days}</div>
            <div className="countdown_tag">days</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{hours}</div>
            <div className="countdown_tag">hrs</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{minutes}</div>
            <div className="countdown_tag">mins</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{seconds}</div>
            <div className="countdown_tag">secs</div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
