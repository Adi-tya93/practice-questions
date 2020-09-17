import React from "react";

const SmallOrder = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
        }}
      >
        Large Order
      </button>
    </div>
  );
};

export default SmallOrder;
