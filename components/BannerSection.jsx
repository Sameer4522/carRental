import React from "react";
import Wrapper from "./partials/Wrapper";

const BannerSection = () => {
  return (
    <section
      id="bannerSection"
      className="my-12 flex w-full items-center justify-center bg-[#2d2d2d] py-[3.8rem] lg:my-[5rem]"
    >
      <Wrapper>
        <div className="flex h-full w-full items-center justify-center text-center text-white">
          <div className="poppins flex flex-col items-center gap-8 md:gap-4">
            <h2 className="text-4xl font-bold leading-tight md:text-[3.3rem]">
              Save big with our cheap car rental!
            </h2>
            <p className=" text-xl font-medium lg:text-2xl">
              Top Airports. Local Suppliers.{" "}
              <span className="text-[#ff4d30]">24/7</span> Support.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BannerSection;
