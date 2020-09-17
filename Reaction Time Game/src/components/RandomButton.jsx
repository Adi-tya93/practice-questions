import React, { useState } from "react";

const RandomButton = (props) => {
  const [buttonState, setButtonState] = useState("unpressed");

  return (
    <div>
      {buttonState === "unpressed" && (
        <button
          onClick={() => {
            setButtonState("start");
            props.onClick();
          }}
          style={{ position: "fixed", top: props.top, right: props.right }}
        >
          Press
        </button>
      )}
    </div>
  );
};

export default RandomButton;
