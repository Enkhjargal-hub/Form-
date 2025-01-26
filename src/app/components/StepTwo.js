import React, { useState } from "react";

const StepTwo = ({ formValue, setFormValue, handleNextStep }) => {
  const { email = "", phone = "", password = "", confirmPassword = "" } = formValue;
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      handleNextStep();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Step 2: Contact & Security</h2>

      <div className="mb-4">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        onClick={handleNext}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Continue
      </button>
    </div>
  );
};

export default StepTwo;
