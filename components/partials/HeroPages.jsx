import React from "react";
import Wrapper from "./Wrapper";

const HeroPages = ({ pageName }) => {
  return (
    <div className="poppins relative z-10 flex h-[26rem] w-full flex-col justify-center bg-herosBg bg-cover bg-center bg-no-repeat text-black">
      <div className="absolute inset-0 h-full w-full bg-[hsla(0,0%,100%,.92)]" />

      <Wrapper classes="z-20">
        <h3 className="mb-1 ml-1 text-[35px] font-bold">{pageName}</h3>

        <p className="ml-1 font-semibold transition-all duration-200">
          <a href="/" className="hover:text-[#ff4d30]">
            Home
          </a>{" "}
          / {pageName}
        </p>
      </Wrapper>
    </div>
  );
};

export default HeroPages;
