import { useState, useRef } from "react";
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function App() {
  const refToggle = useRef();
  const refImg = useRef();
  const [flag, changeFlag] = useState(true);
  const changeBtn = () => {
    if (flag) {
      refToggle.current.style.transform = "translate(25px, 0px)";
      refImg.current.src = "/moon.png";
    } else {
      refToggle.current.style.transform = "translate(1px, 0px)";
      refImg.current.src = "/sun.png";
    }

    changeFlag(!flag);
  };
  const handleKeyPress = (keyCode, key) => {
    console.log(keyCode, key);
  };

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  return (
    <div
      className="app"
      tabIndex={0}
      data-theme={flag ? "" : "dark"}
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
    >
      <div className="calculator">
        <div className="navbar">
          <div className="slidebar" onClick={changeBtn}>
            <p ref={refToggle} className="btn"></p>
          </div>
          <span>
            <img ref={refImg} className="icon" src="/sun.png"></img>
          </span>
        </div>
        <div className="main-section">
          <Header />
          <Footer handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </div>
  );
}

export default App;
