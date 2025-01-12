import { useState, useRef } from "react";
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const usedCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 191, 189, 187, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/"];
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
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedCodes.includes(keyCode)) return;
    if (numbers.includes(key)) {
      if (key === "0" && expression.length === 0) return;
      setExpression(expression + key);
    } else if (operators.includes(key)) {
      if (!expression) return;
      const lstOperator = expression.slice(-1);
      if (operators.includes(lstOperator)) return;
      else if (lstOperator === ".") return;

      setExpression(expression + key);
    } else if (keyCode === 8) {
      if (!expression) return;
      else setExpression(expression.slice(0, -1));
    } else if (keyCode === 13) {
      //to calculate the result:
    }
  };

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
          <Header expression={expression} />
          <Footer handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </div>
  );
}

export default App;
