import React from "react";

const SuppButton = ({ content, fontColor, bgColor, size, handleClick }) => {
  return (
    <div className="supp-button" onClick={handleClick}>
      {content}
    </div>
  );
};

export default SuppButton;
