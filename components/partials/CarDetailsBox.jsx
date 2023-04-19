import React from "react";
import { CAR_DATA } from "../../cars";

const CarDetailsBox = ({ carValue }) => {
  return (
    <>
      {CAR_DATA.map((item, index) => (
        <React.Fragment key={index}>
          {carValue === item.name && (
            <div className="mt-12 w-[16rem] md:mt-1">
              <div className="rubik flex w-full items-center justify-center gap-2 bg-[#ff4d30] py-[10px] text-lg text-white">
                <span className="poppins text-[1.7rem] font-bold">
                  ${item.price}
                </span>
                / rent per day
              </div>

              <div className="poppins grid grid-cols-1 border-l-2 border-r-2 border-[#706f7b] text-sm">
                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">Model</span>
                  <span>{item.model}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">Mark</span>
                  <span>{item.mark}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">Year</span>
                  <span>{item.year}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">Doors</span>
                  <span>{item.doors}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">AC</span>
                  <span>{item.air}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">
                    Transmission
                  </span>
                  <span>{item.transmission}</span>
                </div>

                <div className="grid grid-cols-2 border-b-2 border-[#706f7b] py-[9px] text-center">
                  <span className="border-r-2 border-[#706f7b]">Fuel</span>
                  <span>{item.fuel}</span>
                </div>
              </div>

              <button className="poppins shadow-btn mt-4 w-full bg-[#ff4d30] py-3 text-xl font-bold uppercase text-white hover:bg-[#e9381d]">
                <a href="#bookingSection">RESERVE NOW</a>
              </button>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default CarDetailsBox;
