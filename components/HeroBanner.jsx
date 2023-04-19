import React, { useState, useEffect } from "react";
import Wrapper from "./partials/Wrapper";
import HeroBg from "../src/assets/hero-bg.png";
import MainCar from "../src/assets/main-car.png";
import { HiCheckCircle, HiChevronUp } from "react-icons/hi";
import { GoChevronRight } from "react-icons/go";
import ColoredButton from "./partials/ColoredButton";

const HeroBanner = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="home" className="mt-[6rem] h-[97vh] bg-[#f8f8f8] md:mt-0">
      <Wrapper>
        <img
          src={HeroBg}
          alt="hero-background"
          className="absolute right-0 top-0 hidden lg:block"
        />

        <div className="relative flex h-screen w-full items-center text-center md:ml-1 lg:text-start">
          <div className="mx-auto mt-[3rem] flex max-w-[33rem] flex-col items-center lg:mx-0 lg:items-start">
            <h4 className="rubik text-[1.4rem] font-bold text-[#010103]">
              Plan your trip now
            </h4>

            <h1 className="poppins mb-5 mt-1 text-[3.3rem] font-bold leading-tight">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </h1>

            <p className="rubik mb-10 text-base text-[#706f7b]">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>

            <div className="rubik mb-[6rem] flex w-full flex-col gap-5 text-white md:mb-0 md:flex-row md:justify-center lg:justify-start">
              <ColoredButton
                text="Book Ride"
                href="#bookingSection"
                icon={<HiCheckCircle size={20} className="text-white" />}
                classes="py-4 w-full md:w-[32%] font-bold justify-center"
              />

              <button className="flex items-center justify-center rounded border-2 border-[#010103] bg-black py-4 text-center font-bold transition duration-300 hover:bg-transparent hover:text-black md:w-[32%]">
                <span className="ml-2 hidden md:block">Learn More</span>
                <span className="block md:hidden">Learn More</span>
                <GoChevronRight size={21} className="ml-1" />
              </button>
            </div>
          </div>

          <img
            src={MainCar}
            alt="car"
            className="absolute right-0 z-10 mt-[3rem] hidden w-[64%] lg:block"
          />
        </div>

        {/* <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <HiChevronUp size={32} className="" />
        </div> */}
      </Wrapper>
    </section>
  );
};

export default HeroBanner;
