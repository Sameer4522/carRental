import React from "react";

const FormInputs = ({
  label,
  placeholder,
  classes,
  mainClass,
  labelClass,
  fieldReq,
}) => {
  return (
    <div className={mainClass}>
      <label
        htmlFor="firstName"
        className={`poppins ${labelClass} mb-1 font-medium text-[#777]`}
      >
        {label} <span className="text-[#ff4d30]">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`${classes} bg-[#dbdbdb] text-[#555] outline-none placeholder:text-[#555]`}
      />
      {fieldReq && (
        <p className="mt-1 text-[11px] text-[#585757]">
          This field is required.
        </p>
      )}
    </div>
  );
};

export default FormInputs;
