import React, { useState } from "react";
import { buySmallAPI } from "../apis";

const SmallOrder = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
        }}
      >
        Small Order
      </button>
    </div>
  );
};

export default SmallOrder;
