import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial, img, name, location, classes }) => {
  return (
    <div
      className={`relative w-[33rem] rounded bg-white px-6 py-10 drop-shadow-lg md:p-14 ${classes}`}
    >
      <FaQuoteRight
        size={46}
        className="absolute bottom-[4.1rem] right-16 hidden text-[#ff4d30] md:block"
      />

      <p className="poppins text-[22px] font-medium leading-[1.5]">
        {testimonial}
      </p>

      <div className="mt-8 flex">
        <div className=" flex items-center gap-4">
          <img
            src={img}
            alt={name}
            className="h-[4.4rem] w-[4.4rem] rounded-full "
          />

          <span>
            <h4 className="poppins text-[17px] font-bold ">{name}</h4>
            <p className="poppins text-base font-medium">{location}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
