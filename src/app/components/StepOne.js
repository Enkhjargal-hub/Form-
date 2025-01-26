import React, { useState } from "react";

const StepOne = ({ formValue, setFormValue, handleNextStep }) => {
  const { firstName, lastName, userName } = formValue;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateAndProceed = () => {
    if (!firstName.trim() || !lastName.trim() || !userName.trim()) {
      setErrorMessage("All fields are required!");
    } else {
      setErrorMessage("");
      handleNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <img 
      src="/Zurag.png" 
      />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Join Us! 😎
      </h2>
      <p className="text-gray-500">Please provide all current information accurately.</p>
      <div className="space-y-6">
        <div>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {errorMessage && (
        <div className="mt-4 text-red-500 text-center">
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        onClick={validateAndProceed}
        className="mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Continue
      </button>
    </div>
  );
};

export default StepOne;



