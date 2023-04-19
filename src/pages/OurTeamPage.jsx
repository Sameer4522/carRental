import React from "react";
import TeamCard from "../../components/partials/TeamCard";
import BookBanner from "../../components/partials/BookBanner";
import HeroPages from "../../components/partials/HeroPages";
import Team1 from "../assets/team1.png";
import Team2 from "../assets/team2.png";
import Team3 from "../assets/team3.png";
import Team4 from "../assets/team4.png";
import Team5 from "../assets/team5.png";
import Team6 from "../assets/team6.png";

const OurTeamPage = () => {
  return (
    <>
      <HeroPages pageName="Our Team" />

      <div className="mx-auto grid w-full max-w-[73rem] place-content-center gap-y-12 pb-32 pt-24 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        <div className=" lg:lg:place-self-end xl:place-self-center">
          <TeamCard img={Team1} name="Luke Miller" role="Salesman" />
        </div>
        <div className=" lg:lg:place-self-start xl:place-self-center">
          <TeamCard img={Team2} name="Caitlyn Hunt" role="Manager" />
        </div>
        <div className=" lg:lg:place-self-end xl:place-self-center">
          <TeamCard img={Team3} name="Martin Rizz" role="Mechanic" />
        </div>
        <div className=" lg:lg:place-self-start xl:place-self-center">
          <TeamCard img={Team4} name="Lauren Rivera" role="Car Detailist" />
        </div>
        <div className=" lg:lg:place-self-end xl:place-self-center">
          <TeamCard img={Team5} name="Briana Ross" role="Photographer" />
        </div>
        <div className=" lg:lg:place-self-start xl:place-self-center">
          <TeamCard img={Team6} name="Michael Diaz" role="Business Owner" />
        </div>
      </div>

      <BookBanner />
    </>
  );
};

export default OurTeamPage;
