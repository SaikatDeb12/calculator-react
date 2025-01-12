import { useState, useRef, useEffect } from "react";
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
  const [theme, changetheme] = useState(
    JSON.parse(localStorage.getItem("themeSetting")) || false
  );
  const [history, updataHistory] = useState(
    JSON.parse(localStorage.getItem("calculatorHistory")) || []
  );
  const changeBtn = () => {
    if (theme) {
      refToggle.current.style.transform = "translate(25px, 0px)";
      refImg.current.src = "/moon.png";
    } else {
      refToggle.current.style.transform = "translate(1px, 0px)";
      refImg.current.src = "/sun.png";
    }

    changetheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem("themeSetting", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isDecimal, setDecimal] = useState(false);

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedCodes.includes(keyCode)) return;
    if (numbers.includes(key)) {
      //numbers
      if (key === "0" && expression.length === 0) return;
      setExpression(expression + key);
      calculate(expression + key);
    } else if (operators.includes(key)) {
      //operators
      setDecimal(false);
      if (!expression) return;
      const lstOperator = expression.slice(-1);
      if (operators.includes(lstOperator)) return;
      else if (lstOperator === ".") return;

      setExpression(expression + key);
    } else if (keyCode === 190) {
      //for decimal
      if (!expression) return;
      if (!isDecimal) {
        setExpression(expression + ".");
        setDecimal(true);
      }
    } else if (keyCode === 8) {
      // backspace
      if (!expression) return;
      else setExpression(expression.slice(0, -1));
      calculate(expression.slice(0, -1));
    } else if (keyCode === 13) {
      //result
      //to calculate the result:
      calculate(expression);

      const tempHistory = [...history];
      // to remove the first element(works as a queue)
      if (tempHistory.length > 20) tempHistory = tempHistory.slice(0, 1);
      tempHistory.push(expression); //this
      updataHistory(tempHistory);
    }
  };

  const calculate = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }
    const lstChar = exp.slice(-1);
    if (!numbers.includes(lstChar)) {
      exp = exp.slice(0, -1);
    }

    //and the ans must be string
    const ans = eval(exp).toFixed(2) + "";
    setResult(ans);
  };

  return (
    <div
      className="app"
      tabIndex={0}
      data-theme={theme ? "" : "dark"}
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
          <Header expression={expression} result={result} history={history} />
          <Footer handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </div>
  );
}

export default App;
