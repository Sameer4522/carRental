import React from "react";
import HeroPages from "../../components/partials/HeroPages";
import PlanTripSection from "../../components/PlanTripSection";
import BookBanner from "../../components/partials/BookBanner";
import AboutUs from "../assets/about-us.svg";
import Car1 from "../assets/book1.png";
import Car2 from "../assets/book2.png";
import Car3 from "../assets/book3.png";

const AboutPage = () => {
  return (
    <section id="about" className="">
      <HeroPages pageName="About" />

      <div className="mx-auto mb-8 mt-[6rem] flex w-full flex-col items-center gap-16 px-4 text-center md:max-w-[40rem] md:px-0 xl:max-w-[60rem] xl:flex-row xl:text-start">
        <img src={AboutUs} alt="about-us" className="w-[30rem]" />

        <div class="flex flex-col text-black">
          <h3 className="rubik mb-2 text-[22px] font-medium">About Company</h3>

          <h2 className="poppins mb-4 text-[39px] font-bold leading-[1.2]">
            You start the engine and your adventure begins
          </h2>

          <p className="rubik mb-6 leading-snug text-[#706f7b]">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>

          <div class="mt-4 grid grid-cols-1 gap-10 md:mt-0 md:grid-cols-3">
            <div className=" place-self-center">
              <img src={Car1} alt="car-icon" className="mt-[9px]" />
              <span className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row">
                <h4 className="text-4xl font-bold">20</h4>
                <p className="rubik text-[#706f7b]">
                  Car <br /> Types
                </p>
              </span>
            </div>

            <div className=" place-self-center">
              <img
                src={Car2}
                alt="car-icon"
                className="ml-[10px] mt-1 md:ml-0"
              />
              <span className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row">
                <h4 className="text-4xl font-bold">85</h4>
                <p className="rubik text-[#706f7b]">Repair Shop</p>
              </span>
            </div>

            <div className=" place-self-center">
              <img
                src={Car3}
                alt="car-icon"
                className="ml-[22px] mt-[2px] md:ml-0"
              />
              <span className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row">
                <h4 className="text-4xl font-bold">75</h4>
                <p className="rubik text-[#706f7b]">Repair Shop</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <PlanTripSection />

      <BookBanner />
    </section>
  );
};

export default AboutPage;
