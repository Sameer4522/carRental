import React, { useState } from "react";
import Wrapper from "./partials/Wrapper";
import PickButton from "./partials/PickButton";
import { cars } from "../cars";
import CarAudi from "../src/assets/audi.jpg";
import CarGolf from "../src/assets/golf.jpg";
import CarToyota from "../src/assets/toyota.jpg";
import CarBmw from "../src/assets/bmw.jpg";
import CarMercedes from "../src/assets/benz.jpg";
import CarPassat from "../src/assets/vw.jpg";
import CarDetailsBox from "./partials/CarDetailsBox";

const PickSection = () => {
  const [carValue, setCarValue] = useState("Audi A1 S-Line");
  const [isLoading, setIsLoading] = useState(true);

  let imgUrl;
  switch (carValue) {
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
    <section id="pickSection" className="bg-white py-14 md:py-24">
      <Wrapper>
        <div className="flex flex-col">
          <div className="rubik mx-auto mb-14 max-w-[32rem] text-center text-black">
            <h3 className="text-2xl font-semibold">Vehicle Models</h3>

            <h2 className="poppins mb-4 mt-2 text-[2.5rem] font-bold leading-tight md:my-2">
              Our rental fleet
            </h2>

            <p className="font-meduim text-base text-[#706f7b]">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>

          <div className="flex w-full flex-col xl:flex-row xl:justify-between xl:gap-6">
            <div className="flex flex-col gap-2">
              {cars.map((item, index) => (
                <PickButton
                  key={index}
                  text={item.name}
                  value={item.name}
                  onClick={(e) => {
                    const selectedValue = e.target.value;
                    setCarValue(selectedValue);
                  }}
                  carValue={carValue}
                />
              ))}
            </div>

            <div className="flex flex-col items-center justify-between md:mt-14 md:flex-row md:items-start md:gap-[2rem] xl:mt-0 xl:gap-[8rem]">
              <div className="relative md:w-[31.5rem] xl:w-[31.5rem]">
                {isLoading && <span className="loader" />}
                <img
                  src={imgUrl}
                  alt="car-image"
                  className={`mt-12 w-full ${
                    isLoading ? "hidden" : "block"
                  } py-4 md:py-0`}
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              <CarDetailsBox carValue={carValue} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PickSection;
