import React, { useState, useEffect } from "react";
import Wrapper from "./partials/Wrapper";
import BookingInput from "./partials/BookingInput";
import ColoredButton from "./partials/ColoredButton";
import { IoCloseSharp } from "react-icons/io5";
import { FaCarAlt, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import authState from "../hooks/authState";
import Modal from "./Modal";
import { cars } from "../cars";
import { pickAndDropLocations } from "../pickAndDropLocations";

const BookingSection = () => {
  const [confirmBooking, setConfirmBooking] = useState(false);

  const {
    inputs,
    errorMessage,
    modal,
    handleBookingInputs,
    onSubmit,
    setErrorMessage,
    setModal,
  } = authState();

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <section id="bookingSection" className="bg-bookingbg">
      <Wrapper classes="poppins">
        <div className="mb-10">
          <div className="relative z-10 flex h-auto w-full flex-col rounded-[5px] bg-white bg-bookingImgBg bg-cover bg-[50%] bg-no-repeat px-6 py-10 text-black drop-shadow-lg md:px-[3.5rem] md:pb-[4rem] md:pt-[3rem]">
            <h2 className="mb-7 text-2xl font-bold">Book a car</h2>

            <p
              className={`rubik -mt-2 mb-5 ${
                errorMessage ? "flex" : "hidden"
              } items-center justify-between rounded-md bg-[#f8d7da] 
            py-[10px] pl-4 pr-3 text-[17px] font-medium text-[#721c24]`}
            >
              All fields required!
              <IoCloseSharp
                size={19}
                className="cursor-pointer"
                onClick={() => setErrorMessage(false)}
              />
            </p>

            <p
              className={`rubik -mt-2 mb-5 ${
                confirmBooking ? "flex" : "hidden"
              } items-center justify-between rounded-md  bg-[#c3fabe] py-[10px] pl-4 pr-3 text-[17px] font-medium text-[#2a6817]`}
            >
              Check your email to confirm your order!
              <IoCloseSharp
                size={19}
                className="cursor-pointer"
                onClick={() => setConfirmBooking(false)}
              />
            </p>

            <form className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <BookingInput
                dropdown={true}
                icon={
                  <FaCarAlt size={19} className="mr-[0.8rem] text-[#ff4d30]" />
                }
                label="Select Your Car Type"
                name="carType"
                object1={<option>Select Your Car Type</option>}
                objectMap={cars.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              />

              <BookingInput
                dropdown={true}
                icon={
                  <FaMapMarkerAlt
                    size={17}
                    className="mr-[0.6rem] text-[#ff4d30]"
                  />
                }
                label="Pick-up"
                name="pickUpLocation"
                object1={<option>Select pick up location</option>}
                objectMap={pickAndDropLocations.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              />

              <BookingInput
                dropdown={true}
                icon={
                  <FaMapMarkerAlt
                    size={17}
                    className="mr-[0.6rem] text-[#ff4d30]"
                  />
                }
                label="Drop-of"
                name="dropOffLocation"
                object1={<option>Select drop off location</option>}
                objectMap={pickAndDropLocations.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              />

              <BookingInput
                calendar={true}
                name="pickUpDate"
                value={inputs.pickUpDate.text}
                onChange={(e) => {
                  handleBookingInputs(e.target.name, e.target.value);
                }}
                icon={
                  <FaRegCalendarAlt
                    size={16}
                    className="mr-[0.8rem] text-[#ff4d30]"
                  />
                }
                label="Pick-up"
              />

              <BookingInput
                calendar={true}
                name="dropOffDate"
                value={inputs.dropOffDate.text}
                onChange={(e) => {
                  handleBookingInputs(e.target.name, e.target.value);
                }}
                icon={
                  <FaRegCalendarAlt
                    size={16}
                    className="mr-[0.8rem] text-[#ff4d30]"
                  />
                }
                label="Drop-of"
              />

              <div className="pt-4 md:pt-[2.19rem]">
                <ColoredButton
                  text="Search"
                  onClick={onSubmit}
                  type="submit"
                  classes="flex justify-center text-[17px] w-full py-3 rounded-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
      {modal && (
        <>
          <div
            onClick={() => setModal(false)}
            className={
              modal &&
              "fixed top-0 z-[90] hidden h-full w-full bg-[rgba(0,0,0,.3)] opacity-100 md:block"
            }
          />
          <div>
            <Modal
              setModal={setModal}
              inputCarType={inputs.carType.text}
              setConfirmBooking={setConfirmBooking}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default BookingSection;
