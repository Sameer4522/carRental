import React from "react";
import HeroPages from "../../components/partials/HeroPages";
import BookBanner from "../../components/partials/BookBanner";
import Wrapper from "../../components/partials/Wrapper";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaEnvelopeOpenText } from "react-icons/fa";
import FormInputs from "../../components/partials/FormInputs";
import ColoredButton from "../../components/partials/ColoredButton";

const ContactPage = () => {
  return (
    <div>
      <HeroPages pageName="Contact" />

      <Wrapper>
        <div className="grid grid-cols-1 gap-4 bg-contactBg bg-center bg-no-repeat py-24 text-center text-black lg:grid-cols-2 lg:text-start">
          <div className="poppins mx-auto flex max-w-[27rem] flex-col gap-2 lg:mx-0">
            <h2 className="text-[38px] font-bold leading-tight">
              Need additional information?
            </h2>

            <p className="rubik mb-8 mt-6 text-[#706f7b] lg:my-4">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>

            <a
              href="/"
              className="flex items-center justify-center gap-3 text-base  font-semibold transition duration-300 hover:text-[#ff4d30] lg:justify-start"
            >
              <BsTelephoneFill /> (123) 456-7869
            </a>
            <a
              href="/"
              className="my-1 flex items-center justify-center gap-3 text-base font-semibold transition duration-300 hover:text-[#ff4d30] lg:justify-start"
            >
              <MdEmail /> carrental@carmail.com
            </a>
            <a
              href="/"
              className="flex items-center justify-center gap-3 text-base  font-semibold transition duration-300 hover:text-[#ff4d30] lg:justify-start"
            >
              <FaMapMarkerAlt />
              Rajanadgaon, Chhattisgarh
            </a>
          </div>

          <div className="mt-16 flex flex-col md:mt-0">
            <form>
              <div className="">
                <FormInputs
                  label="Full Name"
                  mainClass="flex flex-col"
                  labelClass="text-black font-semibold text-base"
                  classes="py-4 px-6 rubik text-base bg-[#f2f2f2]"
                  placeholder='E.g: "Sameer Jain"'
                />
              </div>

              <div className="my-8 lg:my-4">
                <FormInputs
                  label="Email"
                  mainClass="flex flex-col"
                  labelClass="text-black font-semibold text-base"
                  classes="py-4 px-6 rubik text-base bg-[#f2f2f2]"
                  placeholder="youremail@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label className="poppins mb-2 font-semibold text-black">
                  Tell us about it <span className="text-[#ff4d30]">*</span>
                </label>

                <textarea
                  className="bg-[#f2f2f2] px-6 py-4 placeholder:text-[#555]"
                  placeholder="Write here..."
                  cols="20"
                  rows="7"
                />
              </div>

              <div className="mt-10 w-full lg:mt-6">
                <ColoredButton
                  text="Send Message"
                  icon={<FaEnvelopeOpenText />}
                  classes="w-full py-4 items-center justify-center font-bold text-lg"
                  type="button"
                />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>

      <BookBanner />
    </div>
  );
};

export default ContactPage;
