import React from "react";
import Wrapper from "./partials/Wrapper";
import Trip1 from "../src/assets/planTrip1.png";
import Trip2 from "../src/assets/planTrip2.png";
import Trip3 from "../src/assets/planTrip3.png";

const PlanTripSection = () => {
  return (
    <>
      <section id="planTip" className="bg-white py-8 md:py-24">
        <Wrapper>
          <div className="flex flex-col">
            <div className="mx-auto text-center text-black">
              <h3 className="rubik mb-4 text-[25px] font-semibold">
                Plan your trip now
              </h3>

              <h2 className="poppins text-[2.5rem] font-bold">
                Quick &amp; easy car rental
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-3">
              <div className="flex flex-col items-center px-4 py-4 text-center md:px-[9rem] md:py-0 lg:px-16 lg:py-4">
                <img src={Trip1} alt="icon_img" className="w-[10.5rem]" />
                <h3 className="poppins mb-3 mt-1 text-2xl font-bold text-black">
                  Select Car
                </h3>
                <p className="rubik text-base leading-snug text-[#706f7b]">
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="flex flex-col items-center px-4 py-4 text-center md:mt-6 md:px-[9rem] md:py-0 lg:mt-0 lg:px-16 lg:py-4">
                <img src={Trip2} alt="icon_img" className="w-[10.5rem]" />
                <h3 className="poppins mb-3 mt-1 text-2xl font-bold text-black">
                  Contact Operator
                </h3>
                <p className="rubik text-base leading-snug text-[#706f7b]">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="flex flex-col items-center px-4 py-4 text-center md:mt-6 md:px-[8rem] md:py-0 lg:mt-0 lg:px-16 lg:py-4">
                <img src={Trip3} alt="icon_img" className="w-[10.5rem]" />
                <h3 className="poppins mb-3 mt-1 text-2xl font-bold text-black">
                  Let's Drive
                </h3>
                <p className="rubik text-base leading-snug text-[#706f7b]">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <hr />
    </>
  );
};

export default PlanTripSection;
