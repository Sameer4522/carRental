import React, { useState } from "react";
import authState from "../hooks/authState";
import { IoCloseSharp } from "react-icons/io5";
import { FaInfoCircle, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import CarAudi from "../src/assets/audi.jpg";
import CarGolf from "../src/assets/golf.jpg";
import CarToyota from "../src/assets/toyota.jpg";
import CarBmw from "../src/assets/bmw.jpg";
import CarMercedes from "../src/assets/benz.jpg";
import CarPassat from "../src/assets/vw.jpg";
import FormInputs from "./partials/FormInputs";
import ColoredButton from "./partials/ColoredButton";

const Modal = ({ setModal, inputCarType, setConfirmBooking }) => {
  const { inputs } = authState();

  let imgUrl;
  switch (inputCarType) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  return (
    <div className="poppins trans fixed left-[50%] top-[50%] z-[100] flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll rounded border-[3px] border-white bg-white pr-[3px] text-white lg:top-[53%] lg:w-[52rem]">
      <div className="flex items-center justify-between bg-[#ff4d30] px-6 py-4">
        <h2 className="text-2xl font-bold">COMPLETE RESERVATION</h2>

        <IoCloseSharp
          size={28}
          className="cursor-pointer stroke-[15] text-white transition duration-200 hover:text-[#ffffffcf]"
          onClick={() => setModal(false)}
        />
      </div>

      <div className="flex flex-col gap-4 bg-[#ffeae6] px-6 py-6">
        <h4 className="mb-2 flex gap-2 text-[20px] font-bold text-[#ff4d30]">
          <FaInfoCircle size={25} /> Upon completing this reservation enquiry,
          you will receive:
        </h4>

        <p className="rubik text-lg font-medium leading-tight text-[#777]">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>

      <div className="grid bg-white px-6 py-8 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex flex-col gap-6 text-center md:text-start">
            <h5 className="text-xl font-bold text-[#ff4d30]">
              Location & Date
            </h5>

            <span className="md:flex md:gap-2">
              <FaMapMarkerAlt
                size={19}
                className="mt-1 hidden text-[#777] md:block"
              />

              <div>
                <h6 className="mb-1 text-base font-bold text-[#000] md:mb-px">
                  Pick-Up Date &amp; Time
                </h6>

                <p className="text-[#777]">
                  {inputs.pickUpDate.text} /{" "}
                  <input
                    type="time"
                    className="cursor-pointer border border-black px-1"
                  />
                </p>
              </div>
            </span>

            <span className="md:flex md:gap-2">
              <FaMapMarkerAlt
                size={19}
                className="mt-1 hidden text-[#777] md:block"
              />

              <div>
                <h6 className="text-base font-bold text-[#000] md:mb-px">
                  Drop-Off Date &amp; Time
                </h6>

                <p className="text-[#777]">
                  {inputs.dropOffDate.text} /{" "}
                  <input
                    type="time"
                    className="cursor-pointer border border-black px-1"
                  />
                </p>
              </div>
            </span>

            <span className="md:flex md:gap-2">
              <FaRegCalendarAlt
                size={18}
                className="mt-1 hidden text-[#777] md:block"
              />

              <div>
                <h6 className="text-base font-bold text-[#000] md:mb-px">
                  Pick-Up Location
                </h6>

                <p className="text-[#777]">{inputs.pickUpLocation.text}</p>
              </div>
            </span>

            <span className="md:flex md:gap-2">
              <FaRegCalendarAlt
                size={18}
                className="mt-1 hidden text-[#777] md:block"
              />

              <div>
                <h6 className="mb-1 text-base font-bold text-[#000] md:mb-px">
                  Drop-Off Location
                </h6>

                <p className="text-[#777]">{inputs.dropOffLocation.text}</p>
              </div>
            </span>
          </div>
        </div>

        <div className="my-10 flex flex-col gap-6 text-center md:my-0 md:text-start">
          <h5 className="text-xl font-bold text-[#ff4d30]">
            <span className="text-black">Car -</span> Audi A1 S-Line
          </h5>

          {imgUrl && <img src={imgUrl} alt="car-image" className="w-full" />}
        </div>
      </div>

      <hr className="w-full border-[#77777794]" />

      <div className="flex flex-col bg-white py-8">
        <h4 className="mb-7 px-6 text-xl font-bold uppercase text-[#ff4d30]">
          Personal Information
        </h4>

        <form className="flex flex-col">
          <div className="grid grid-cols-2 gap-5 px-6">
            <FormInputs
              mainClass="flex flex-col"
              label="First Name"
              placeholder="Enter your first name"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />

            <FormInputs
              mainClass="flex flex-col"
              label="Last Name"
              placeholder="Enter your last name"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />

            <FormInputs
              mainClass="flex flex-col"
              label="Phone Number"
              placeholder="Enter your phone number"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />

            <FormInputs
              mainClass="flex flex-col"
              label="Age"
              placeholder="18"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />
          </div>

          <FormInputs
            mainClass="mb-4 flex flex-col px-6"
            label="Email"
            placeholder="Enter your email address"
            classes="w-full px-[15px] py-[10px] text-sm"
            fieldReq={true}
          />

          <FormInputs
            mainClass="mb-4 flex flex-col px-6"
            label="Address "
            placeholder="Enter your street address"
            classes="w-full px-[15px] py-[10px] text-sm"
            fieldReq={true}
          />

          <div className="grid grid-cols-2 gap-6 px-6">
            <FormInputs
              mainClass="flex flex-col"
              label="City"
              placeholder="Enter your city"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />

            <FormInputs
              mainClass="flex flex-col"
              label="Zip Code"
              placeholder="Enter your zip code"
              classes="w-full px-[15px] py-[10px] text-sm"
              fieldReq={true}
            />
          </div>

          <span className="mb-16 mt-5 flex items-center gap-3 px-6 text-[#565454] lg:mb-12">
            <input type="checkbox" className="h-[1rem] w-[0.9rem]" />
            <p className="text-base">Please send me latest news and updates</p>
          </span>

          <div className="-my-9 flex w-full items-center justify-center bg-[#dbdbdb] px-6 py-8 md:justify-end lg:-my-4">
            <ColoredButton
              text="Reserve Now"
              classes="py-3 px-6 uppercase text-xl"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
                setConfirmBooking(true);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
