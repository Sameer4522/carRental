import React from "react";

const PickButton = ({ text, onClick, value, carValue }) => {
  return (
    <button
      type="button"
      value={value}
      onClick={onClick}
      className={`poppins w-full cursor-pointer  py-4 pl-6 pr-8 text-start text-xl font-semibold transition-all duration-200 hover:bg-[#ff4d30] hover:text-white ${
        carValue === value ? "bg-[#ff4d30] text-white" : "bg-[#e9e9e9]"
      }`}
    >
      {text}
    </button>
  );
};

export default PickButton;
