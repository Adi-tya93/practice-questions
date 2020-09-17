import React, { useState, useEffect } from "react";
import "./styles.css";
import Timer from "./components/Timer.jsx";
import RandomButton from "./components/RandomButton";
export default function App() {
  const [activeButton, setActiveButton] = useState(6);
  return (
    <div className="App">
      <Timer active={activeButton}></Timer>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
      <RandomButton
        onClick={() => {
          setActiveButton(activeButton - 1);
        }}
        top={Math.floor(Math.random() * 500 + 80)}
        right={Math.floor(Math.random() * 500 + 100)}
      ></RandomButton>
    </div>
  );
}
