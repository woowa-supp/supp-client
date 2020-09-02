import React from "react";
import SuppButton from "../common/SuppButton";

const MultipleChoice = ({ choices, handleClick }) => {
  return (
    <div onClick={handleClick}>
      {choices.map((choice) => (
        <SuppButton content={choice} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default MultipleChoice;
