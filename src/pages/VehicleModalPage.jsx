import React from "react";
import HeroPages from "../../components/partials/HeroPages";
import BookBanner from "../../components/partials/BookBanner";
import BookVehicleCard from "../../components/partials/BookVehicleCard";
import Car1 from "../assets/audi.png";
import Car2 from "../assets/golf.png";
import Car3 from "../assets/toyota.png";
import Car4 from "../assets/bmw.png";
import Car5 from "../assets/benz.png";
import Car6 from "../assets/passat.png";

const VehicleModalPage = () => {
  return (
    <div>
      <HeroPages pageName="Vehicle Modals" />

      <div className="mx-auto grid gap-y-8 py-24 text-center md:grid-cols-1 lg:max-w-[73rem] lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        <div className="place-self-center lg:place-self-end xl:place-self-center">
          <BookVehicleCard img={Car1} carName="Audi" rate="45$" />
        </div>
        <div className="place-self-center lg:place-self-start xl:place-self-center">
          <BookVehicleCard img={Car2} carName="Golf 6" rate="37$" />
        </div>
        <div className="place-self-center lg:place-self-end xl:place-self-center">
          <BookVehicleCard img={Car3} carName="Toyota" rate="30$" />
        </div>
        <div className="place-self-center lg:place-self-start xl:place-self-center">
          <BookVehicleCard img={Car4} carName="BMW" rate="35$" />
        </div>
        <div className="place-self-center lg:place-self-end xl:place-self-center">
          <BookVehicleCard img={Car5} carName="Mercedes" rate="50$" />
        </div>
        <div className="place-self-center lg:place-self-start xl:place-self-center">
          <BookVehicleCard img={Car6} carName="VW Passat" rate="25$" />
        </div>
      </div>

      <BookBanner />
    </div>
  );
};

export default VehicleModalPage;
