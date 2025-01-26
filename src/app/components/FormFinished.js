import React, { useState } from "react";

const FormComponent = () => {
  const [formValue, setFormValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setMessage("Form Submitted Successfully! 🎉");
    console.log("Submitted Data:", formValue);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default FormComponent;
