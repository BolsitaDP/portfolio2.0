import React from "react";
import { useState } from "react";
import { BsFillCircleFill, BsPalette } from "react-icons/bs";
import "./setcolor.css";

const SetColor = ({ color }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleColor = (e) => {
    color(e);
  };

  return (
    <div className={`themesMenu`}>
      <button onClick={handleShow} className="circularButton">
        <BsPalette />
      </button>
      <div className={`themesColors ${show}`}>
        <button
          onClick={() => handleColor("blue")}
          className="circularButton"
          id="blue"
        >
          <BsFillCircleFill />
        </button>
        <button
          onClick={() => handleColor("red")}
          className="circularButton"
          id="red"
        >
          <BsFillCircleFill />
        </button>
        <button
          onClick={() => handleColor("green")}
          className="circularButton"
          id="green"
        >
          <BsFillCircleFill />
        </button>
        <button
          onClick={() => handleColor("orange")}
          className="circularButton"
          id="orange"
        >
          <BsFillCircleFill />
        </button>
      </div>
    </div>
  );
};

export default SetColor;
