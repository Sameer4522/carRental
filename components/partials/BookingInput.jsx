import React from "react";
import authState from "../../hooks/authState";

const BookingInput = ({
  icon,
  label,
  dropdown,
  calendar,
  name,
  value,
  object1,
  objectMap,
  onChange,
}) => {
  const { handleBookingInputs, setCarTypeState } = authState();

  return (
    <div className="flex flex-col">
      <label className="mb-3 flex items-center text-[16px] font-semibold">
        {icon}
        {label}
        <span className="ml-1 text-[#ff4d30]">*</span>
      </label>

      {dropdown && (
        <div className="w-full border border-[#ccd7e6]">
          <select
            name={name}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setCarTypeState(selectedValue);
              handleBookingInputs(e.target.name, selectedValue);
            }}
            className="rubik w-full rounded-sm border-r-[12px] border-transparent px-4 py-3 text-[15px] font-normal text-[#838383] outline-none"
          >
            {object1}
            {objectMap}
          </select>
        </div>
      )}

      {calendar && (
        <div>
          <input
            name={name}
            value={value}
            onChange={onChange}
            type="date"
            className="rubik w-full rounded-sm border border-[#ccd7e6] py-3 pl-[18px] pr-3 text-sm text-[#838383] outline-none hover:cursor-text"
          />
        </div>
      )}
    </div>
  );
};

export default BookingInput;
