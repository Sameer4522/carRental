import React from "react";

const ColoredButton = ({ text, icon, classes, type, onClick, href }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-[0.4rem] rounded bg-[#ff4d30] font-semibold text-white shadow-lg shadow-[rgba(255,83,48,.35)] hover:bg-[#fa4226] hover:shadow-[#FA4226]/50 ${classes}`}
    >
      <a href={href}>{text}</a>
      {icon}
    </button>
  );
};

export default ColoredButton;
