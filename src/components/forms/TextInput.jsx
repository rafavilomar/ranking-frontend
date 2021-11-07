import React from "react";

const TextInput = ({ name, label, type, required = false }) => {
  return (
    <div className="w-full">
      <label className="font-sans font-medium text-gray-600" htmlFor={name}>{label}</label>
      <div className="mt-1">
        <input
          className="w-full text-gray-600 focus:shadow-none focus:outline-none border border-gray-400 py-1 px-2 rounded"
          type={type}
          name={name}
          id={name}
          required={required}
        />
      </div>
    </div>
  );
};
export default TextInput;
