import React from "react";

const Wrapper = ({ children, classes }) => {
  return (
    <div className={`mx-auto w-full max-w-[83.5rem] px-5 ${classes}`}>
      {children}
    </div>
  );
};

export default Wrapper;
