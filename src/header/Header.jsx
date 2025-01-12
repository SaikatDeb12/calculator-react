import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header custom-scroll">
      <div className="history ">
        {props.history &&
          props.history?.map((item) => {
            return <p key={item + " " + Math.random() * 44}>{item}</p>;
          })}
      </div>
      <div className="execution custom-scroll">
        <p>{props.expression}</p>
      </div>
      <div className="result">
        <p>{props.result}</p>
      </div>
    </div>
  );
}

export default Header;
