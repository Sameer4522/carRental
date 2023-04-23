import React from "react";
import Wrapper from "./partials/Wrapper";
import Google from "../src/assets/downloadGoogle.svg";
import Apple from "..//src/assets/downloadApple.svg";

const DownloadSection = () => {
  return (
    <section
      id="downloadSection"
      className="h-auto w-full bg-[#f8f8f8] bg-cover bg-top bg-no-repeat py-24 md:bg-[url('./src/assets/download-bg.png')]"
    >
      <Wrapper>
        <div className="poppins flex max-w-[33rem] flex-col gap-4 text-center font-bold md:text-left">
          <h2 className="mb-1 text-[2.6rem]">
            Download our app to get most out of it
          </h2>

          <p className="rubik font-normal text-[#706f7b]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:gap-6">
            <img
              src={Google}
              alt="google_play_store"
              className=" cursor-pointer"
            />
            <img src={Apple} alt="apple_store" className=" cursor-pointer" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default DownloadSection;
