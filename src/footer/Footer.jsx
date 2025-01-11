import React from "react";
import "./footer.css";

function Footer() {
  const keys = [
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
  ];
  const symbols = [
    {
      symbols: "<=",
      value: "backspace",
      keyCode: 8,
    },
    {
      symbols: "/",
      value: "/",
      keyCode: 191,
    },
    {
      symbols: "x",
      value: "*",
      keyCode: 106,
    },
    {
      symbols: "-",
      value: "-",
      keyCode: 189,
    },
    {
      symbols: "+",
      value: "+",
      keyCode: 107,
    },
  ];

  return (
    <div className="footer">
      <div className="keys">
        {keys.map((ele, ind) => {
          <p key={ind}>{ele.label}</p>;
        })}
      </div>
      <div className="symbols"></div>
    </div>
  );
}

export default Footer;
