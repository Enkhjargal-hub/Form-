"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: null,
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formValue);
    alert("Амжилттай бөглөсөн!");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-200">
      <div className="w-[400px] bg-white p-6 shadow-lg rounded">
        {currentStep === 1 && (
          <StepOne
            formValue={formValue}
            setFormValue={setFormValue}
            handleNextStep={handleNextStep}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            formValue={formValue}
            setFormValue={setFormValue}
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            formValue={formValue}
            setFormValue={setFormValue}
            handleBackStep={handleBackStep}
            handleSubmit={handleSubmit}
          />
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleBackStep}
            disabled={currentStep === 1}
            className={`py-2 px-4 rounded ${
              currentStep === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            Back
          </button>
          {currentStep < 3 && (
            <button
              onClick={handleNextStep}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
