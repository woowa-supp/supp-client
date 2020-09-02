import React from "react";
import SuppButton from "../common/SuppButton";

const ShortWriting = ({ content, handleClick, buttonContent }) => {
  return (
    <div>
      <div>{content}</div>
      <div className="input-container">여기에 입력하는 </div>
      <SuppButton content={buttonContent} handleClick={handleClick} />
    </div>
  );
};

export default ShortWriting;
