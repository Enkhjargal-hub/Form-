"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formError, setFormError] = useState(null);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const handleError = (error) => {
    setFormError((prev) => ({ ...prev, ...error }));
  };

  const Step = [StepOne, StepTwo, StepThree, FormFinished][currentStep];

  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <Step 
        errors={formError}
        formValue={formValue}
        handleError={handleError}
        handleNextStep={handleNextStep} 
        handleBackStep={handleBackStep} 
      />
    </div>
  );
};

export default MultiStepForm;
