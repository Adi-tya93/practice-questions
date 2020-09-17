import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [buttonState, setButtonState] = useState("");
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (props.active > 0) {
      setTimeout(() => {
        updatTime();
      }, 1000);
    }

    // Clear timeout if the component is unmounted
  });

  // Runs after we click start and keeps on running
  const updatTime = () => {
    setTime(Math.floor(new Date() / 1000));
    //seconds: Math.floor((difference / 1000) % 60)
  };
  return (
    <div>
      <button
        onClick={() => {
          setStartTime(Math.floor(new Date() / 1000));
          updatTime();
          setButtonState("start");
        }}
      >
        {" "}
        Click to start
      </button>
      <p>{buttonState === "start" && time - startTime}</p>
      <p>Active buttons: {props.active}, get them all!!</p>
    </div>

    //button to start & stop?
    // Display time
  );
};

export default Timer;
