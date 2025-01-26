import React, { useState } from "react";

const StepTwo = (props) => {
  const { handleNextStep, handleBackStep, formValue, setFormValue, handleError } = props;
  const { email = "", phoneNumber = "", password = "", confirmPassword = "" } = formValue || {};

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepTwoValid(formValue);
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
        <p className="font-bold text-lg text-center">Step 2: Contact & Security Info</p>
        <p className="text-sm text-slate-500 text-center mb-6">
          Please provide your contact and security information.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>

          <div>
            <label className="block mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.phoneNumber && <p className="text-red-500 text-sm">{error.phoneNumber}</p>}
          </div>

          <div>
            <label className="block mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          </div>

          <div>
            <label className="block mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-sm">{error.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBackStep}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Back
          </button>
          <button
            onClick={handleFormNextStep}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Continue 2/3 ➤
          </button>
        </div>
      </div>
    </div>
  );
};

const isStepTwoValid = (data) => {
  const { email, phoneNumber, password, confirmPassword } = data || {};
  const errors = {};
  let isValid = true;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
    isValid = false;
  }

  if (!phoneNumber || !/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number (10-15 digits).";
    isValid = false;
  }

  if (!password || password.length < 6) {
    errors.password = "Password must contain at least 6 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
    isValid = false;
  }

  return { isValid, errors };
};

export default StepTwo;
