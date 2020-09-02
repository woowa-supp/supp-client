import React from "react";
import SuppButton from "../common/SuppButton";

const MultipleChoice = ({ choices, handleClick }) => {
  return (
    <div onClick={handleClick}>
      {choices.map((choice, index) => (
        <SuppButton content={choice} handleClick={handleClick} key={`choice-${index}`} />
      ))}
    </div>
  );
};

export default MultipleChoice;
