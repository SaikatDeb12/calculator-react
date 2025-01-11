import { useState, useRef } from "react";
import "./App.css";

function App() {
  const refToggle = useRef();
  const refImg = useRef();
  let flag = true;
  const changeBtn = () => {
    if (flag) {
      refToggle.current.style.transform = "translate(25px, 0px)";
      refImg.current.src = "/moon.png";
    } else {
      refToggle.current.style.transform = "translate(1px, 0px)";
      refImg.current.src = "/sun.png";
    }
    flag = !flag;
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="navbar">
          <div className="slidebar">
            <p ref={refToggle} className="btn" onClick={changeBtn}></p>
          </div>
          <span>
            <img ref={refImg} className="icon" src="/sun.png"></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
