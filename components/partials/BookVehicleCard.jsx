import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import ColoredButton from "./ColoredButton";

const BookVehicleCard = ({ img, carName, rate }) => {
  return (
    <div className="poppins flex h-auto w-[17rem] flex-col rounded border border-[#d5d5d5] md:w-[22rem]">
      <div className="h-auto w-full rounded">
        <img src={img} alt="audi" className="h-[17rem]" />

        <div className="flex flex-col p-8 text-black">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[22px] font-bold">{carName}</p>
              <span className="-ml-[2px] flex gap-[2px] text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>

            <div className="flex flex-col items-end gap-[2px]">
              <h4 className="text-2xl font-bold ">{rate}</h4>
              <p className="text-sm">per day</p>
            </div>
          </div>

          <div className="my-6 grid grid-cols-2 gap-y-3 border-b border-[#c6c6c6] pb-6 text-[17px] font-medium text-[#777]">
            <span className="flex items-center justify-center gap-3 place-self-start ">
              <FaCarSide size={20} className="text-black" /> {carName}
            </span>

            <span className="flex items-center justify-center gap-3 place-self-end ">
              4/5 <FaCarSide size={20} className="text-black" />
            </span>

            <span className="flex items-center justify-center gap-3 place-self-start ">
              <FaCarSide size={20} className="text-black" /> Manual
            </span>

            <span className="flex items-center justify-center gap-3 place-self-end">
              Diesel <FaCarSide size={20} className="text-black" />
            </span>
          </div>

          <div>
            <ColoredButton
              text="Book Ride"
              classes="py-4 w-full items-center justify-center text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVehicleCard;
