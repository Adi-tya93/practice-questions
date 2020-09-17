import React, { useState } from "react";

const SmallOrder = (props) => {
  return (
    <div>
      <p>Number of Small orders: {props.count}</p>
    </div>
  );
};

export default SmallOrder;
