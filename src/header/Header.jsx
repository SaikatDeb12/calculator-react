import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header custom-scroll">
      <div className="history ">
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
        <p>3+4</p>
      </div>
      <div className="execution">
        <p>{props.expression}</p>
        {/* <p>32+2334+23+123*57678+32+2334+23</p> */}
      </div>
      <div className="result">
        <p>{props.result}</p>
      </div>
    </div>
  );
}

export default Header;
