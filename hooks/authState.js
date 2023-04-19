import { useState } from "react";

const bookingInputTemplate = {
  carType: { text: "" },
  pickUpLocation: { text: "" },
  dropOffLocation: { text: "" },
  pickUpDate: { text: "" },
  dropOffDate: { text: "" },
};

const authState = () => {
  const [inputs, setInputs] = useState({ ...bookingInputTemplate });
  const [carTypeState, setCarTypeState] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [modal, setModal] = useState(false);

  const handleBookingInputs = (key, value) => {
    const currentInput = { ...bookingInputTemplate };
    currentInput[key]["text"] = value;

    setInputs({ ...currentInput });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      inputs.carType.text.length === 0 ||
      inputs.pickUpLocation.text.length === 0 ||
      inputs.dropOffLocation.text.length === 0 ||
      inputs.pickUpDate.text.length === 0 ||
      inputs.dropOffDate.text.length === 0
    ) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setModal(true);
    }
  };

  return {
    handleBookingInputs,
    setCarTypeState,
    onSubmit,
    setErrorMessage,
    setModal,
    inputs,
    modal,
    carTypeState,
    errorMessage,
  };
};

export default authState;
