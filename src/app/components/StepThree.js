"use client";

import React, { useState } from "react";

const StepThree = ({ formValue, setFormValue, handleBackStep, handleSubmit }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  // Огноо сонгох
  const handleDateChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      date: e.target.value,
    }));
  };

  // Зураг оруулах
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
      setFormValue((prev) => ({
        ...prev,
        image: file,
      }));
      setError("");
    } else {
      setError("Зөвхөн зураг файл сонгоно уу.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="border rounded w-[400px] p-6 bg-white shadow-md">
      <img 
      src="/Zurag.png" 
      />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Join Us! 😎
      </h2>
      <p className="text-gray-500">Please provide all current information accurately.</p>

        {/* Огноо сонгох */}
        <div className="mb-4">
          <label className="block mb-1">Select a Date <span className="text-red-500">*</span></label>
          <input
            type="date"
            value={formValue.date || ""}
            onChange={handleDateChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Зураг оруулах */}
        <div className="mb-4">
          <label className="block mb-1">Upload an Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {image && (
            <div className="mt-2">
              <img src={image} alt="Uploaded" className="w-full h-auto rounded shadow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
