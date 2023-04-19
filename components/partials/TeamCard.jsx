import React from "react";

const TeamCard = ({ img, name, role }) => {
  return (
    <div className="w-[17rem] rounded bg-white shadow-md drop-shadow-lg md:w-[22rem]">
      <div className="h-auto w-full bg-[#f6f6f6]">
        <img src={img} alt="team_img" className="w-full" />
      </div>
      <div className="poppins flex flex-col items-center p-6 text-black">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="font-meduim rubik mt-1 text-base text-[#777]">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
