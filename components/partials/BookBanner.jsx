import React from "react";
import Wrapper from "./Wrapper";
import { BsTelephoneFill } from "react-icons/bs";

const BookBanner = () => {
  return (
    <div className="poppins relative mb-8 flex h-[13rem] w-full bg-bookbannerbg lg:h-[11rem]">
      <div className="absolute inset-0 h-full bg-[#2d2d2d] opacity-90" />

      <Wrapper>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 text-white md:gap-6 lg:flex-row lg:gap-10">
          <h2 className="text-center text-3xl font-bold lg:text-start">
            Book a car by getting in touch with us
          </h2>

          <span className="flex items-center text-[#ff4d30]">
            <BsTelephoneFill size={30} className="mr-2" />
            <h3 className="text-3xl font-bold">(123) 456-7869</h3>
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default BookBanner;
