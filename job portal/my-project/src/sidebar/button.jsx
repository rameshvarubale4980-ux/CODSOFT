import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="px-4 py-1 border text-base bg-white hover:bg-blue-500 hover:text-white rounded"
    >
      {title}
    </button>
  );
};

export default Button;
