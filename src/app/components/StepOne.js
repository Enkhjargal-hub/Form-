import React, { useState } from "react";

const StepOne = ({ handleNextStep, formValue, setFormValue, handleError }) => {
  const { firstName = "", lastName = "", userName = "" } = formValue || {};
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      handleNextStep();
    } else {
      handleError(errors);
      setError(errors);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-100">
      <div className="border rounded w-[400px] p-6 bg-white shadow-md">
        <p className="font-bold text-lg text-center">Join Us! 😎</p>
        <p className="text-sm text-slate-500 text-center mb-6">
          Please provide all current information accurately.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}
          </div>
          <div>
            <label className="block mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.lastName && <p className="text-red-500 text-sm">{error.lastName}</p>}
          </div>
          <div>
            <label className="block mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={userName}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.userName && <p className="text-red-500 text-sm">{error.userName}</p>}
          </div>
        </div>
        <button
          onClick={handleFormNextStep}
          className="bg-black text-white w-full mt-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Continue 1/3 ➤
        </button>
      </div>
    </div>
  );
};

const isStepOneValid = (data) => {
  const { firstName, lastName, userName } = data || {};
  const errors = {};
  let isValid = true;

  if (!firstName || firstName.length < 2) {
    errors.firstName = "First name must contain at least 2 characters.";
    isValid = false;
  }
  if (!lastName || lastName.length < 2) {
    errors.lastName = "Last name must contain at least 2 characters.";
    isValid = false;
  }
  if (!userName || userName.length < 3) {
    errors.userName = "Username must contain at least 3 characters.";
    isValid = false;
  }

  return { isValid, errors };
};

export default StepOne;
