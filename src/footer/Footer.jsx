import React from "react";
import "./footer.css";

function Footer(props) {
  const keys = [
    {
      label: "7",
      keyCode: 55,
    },
    {
      label: "8",
      keyCode: 56,
    },
    {
      label: "9",
      keyCode: 57,
    },
    {
      label: "4",
      keyCode: 52,
    },
    {
      label: "5",
      keyCode: 53,
    },
    {
      label: "6",
      keyCode: 54,
    },
    {
      label: "1",
      keyCode: 49,
    },
    {
      label: "2",
      keyCode: 50,
    },
    {
      label: "3",
      keyCode: 51,
    },
    {
      label: "0",
      keyCode: 48,
    },
    {
      label: ".",
      keyCode: 190,
    },
    {
      label: "=",
      keyCode: 13,
    },
  ];
  const symbols = [
    {
      label: "<=",
      value: "backspace",
      keyCode: 8,
    },
    {
      label: "/",
      value: "/",
      keyCode: 191,
    },
    {
      label: "x",
      value: "*",
      keyCode: 106,
    },
    {
      label: "-",
      value: "-",
      keyCode: 189,
    },
    {
      label: "+",
      value: "+",
      keyCode: 107,
    },
  ];

  return (
    <div className="footer">
      <div className="keys">
        {keys.map((ele, ind) => {
          return (
            <p
              key={ind}
              onClick={() => props.handleKeyPress(ele.keyCode, ele.label)}
            >
              {ele.label}
            </p>
          );
        })}
      </div>
      <div className="symbols">
        {symbols.map((ele, ind) => {
          return (
            <p
              key={ind}
              onClick={() => props.handleKeyPress(ele.keyCode, ele.value)}
            >
              {ele.label}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
