import React from "react";
import Wrapper from "./partials/Wrapper";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ColoredButton from "./partials/ColoredButton";

const Footer = () => {
  return (
    <footer className="poppins bg-white py-[4.5rem]">
      <Wrapper>
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-2 md:gap-24 md:text-start lg:grid-cols-4">
          <ul className="">
            <li className="mb-2 text-2xl font-normal text-black">
              <span className="font-bold">CAR</span> Rental
            </li>

            <li className="my-3 text-[15px] text-[#706f7b]">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>

            <li>
              <a
                href="tel:123456789"
                className="mt-1 flex cursor-pointer items-center justify-center text-base font-semibold transition-all duration-200 hover:text-[#ff4d30] md:justify-start"
              >
                <BsTelephoneFill /> &nbsp; (123) -456-789
              </a>
            </li>

            <li>
              <a
                href="mailto:carrental@gmail.com"
                className="mt-2 flex cursor-pointer items-center justify-center text-base font-semibold transition-all duration-200 hover:text-[#ff4d30] md:justify-start"
              >
                <MdEmail />
                &nbsp; carrental@gmail.com
              </a>
            </li>
          </ul>

          <ul className="">
            <li className="mb-2 text-2xl font-bold uppercase text-black">
              Company
            </li>

            <li className="my-2 text-base">
              <a
                href="#home"
                className=" transition-all duration-200 hover:text-[#ff4d30]"
              >
                New York
              </a>
            </li>
            <li className="my-2 text-base">
              <a
                href="#home"
                className=" transition-all duration-200 hover:text-[#ff4d30]"
              >
                Careers
              </a>
            </li>
            <li className="my-2 text-base">
              <a
                href="#home"
                className=" transition-all duration-200 hover:text-[#ff4d30]"
              >
                Mobile
              </a>
            </li>
            <li className="my-2 text-base">
              <a
                href="#home"
                className=" transition-all duration-200 hover:text-[#ff4d30]"
              >
                Blog
              </a>
            </li>
            <li className="my-2 text-base">
              <a
                href="#home"
                className=" transition-all duration-200 hover:text-[#ff4d30]"
              >
                How we work
              </a>
            </li>
          </ul>

          <ul className="">
            <li className="mb-2 text-2xl font-bold uppercase text-black">
              Working Hours
            </li>
            <li className="my-2 text-base">Mon - Fri: 9:00AM - 9:00PM</li>
            <li className="my-2 text-base">Sat: 9:00AM - 19:00PM</li>
            <li className="my-2 text-base">Sun: Closed</li>
          </ul>

          <ul className="">
            <li className="mb-2 text-2xl font-bold uppercase text-black">
              Subscription
            </li>
            <li className="mt-2 text-base">
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li className="">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="my-4 w-full bg-[#ececec] px-6 py-3 text-center text-sm"
              />
            </li>
            <li className="flex items-center justify-center md:block">
              <ColoredButton
                text="Submit"
                classes="text-center w-full py-3 items-center justify-center"
              />
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
