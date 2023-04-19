import React from "react";
import Wrapper from "./partials/Wrapper";
import MainImg from "../src/assets/choose-car-main.png";
import Icon1 from "../src/assets/choose-icon1.png";
import Icon2 from "../src/assets/choose-icon2.png";
import Icon3 from "../src/assets/choose-icon3.png";
import ColoredButton from "./partials/ColoredButton";
import { GoChevronRight } from "react-icons/go";

const ChooseSection = () => {
  return (
    <section
      id="chooseSection"
      className="bg-positon h-full w-full bg-white bg-chooseBg bg-cover bg-no-repeat pb-24 pt-16 lg:pb-24 lg:pt-6"
    >
      <Wrapper>
        <div className="flex flex-col items-center">
          <img src={MainImg} alt="car-image" className="w-[90%]" />

          <div className="mt-10 flex w-full flex-col items-center justify-around lg:mt-6 lg:flex-row lg:items-start">
            <div className="rubik flex max-w-[31.5rem] flex-col items-center text-center text-black lg:items-start lg:text-left">
              <h4 className="mb-1 text-[1.4rem] font-semibold">
                Why Choose Us
              </h4>

              <h2 className="poppins text-[2.5rem] font-bold leading-tight">
                Best valued deals you will ever find
              </h2>

              <p className="font-base my-8 text-base leading-snug text-[#706f7b]">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>

              <ColoredButton
                text="Find Details"
                href="#home"
                classes="py-3 pl-8 pr-6 text-lg rubik max-w-max mb-4"
                icon={<GoChevronRight />}
              />
            </div>

            <div className="mt-16 flex max-w-[28rem] flex-col gap-10 md:gap-8 lg:mt-0">
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-start">
                <img src={Icon1} alt="car-img" className="h-[7rem] w-[7rem]" />

                <div className="ml-0 flex flex-col md:ml-8 lg:ml-3">
                  <h4 className="poppins mb-4 mt-2 text-2xl font-bold md:mb-4 md:mt-0">
                    Cross Country Drive
                  </h4>

                  <p className="rubik font-normal leading-tight text-[#706f7b]">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-start">
                <img src={Icon2} alt="car-img" className="h-[7rem] w-[7rem]" />

                <div className="ml-0 flex flex-col md:ml-8 lg:ml-3">
                  <h4 className="poppins mb-4 mt-2 text-2xl font-bold md:mb-4 md:mt-0">
                    All Inclusive Pricing
                  </h4>

                  <p className="rubik font-normal leading-tight text-[#706f7b]">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-start">
                <img src={Icon3} alt="car-img" className="h-[7rem] w-[7rem]" />

                <div className="ml-0 flex flex-col md:ml-8 lg:ml-3">
                  <h4 className="poppin mb-4 mt-2 text-2xl font-bold md:mb-4 md:mt-0">
                    No Hidden Charges
                  </h4>

                  <p className="rubik font-normal leading-tight text-[#706f7b]">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ChooseSection;
