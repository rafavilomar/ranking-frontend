import React from "react";

const TextInput = ({
  value,
  name,
  label,
  error = false,
  type = "text",
  required = false,
  disabled = false,
  onChange,
}) => (
  <div className="w-full">
    <label className="font-sans font-medium text-gray-600" htmlFor={name}>
      {label}
    </label>
    <div className="mt-1">
      <input
        className={`w-full text-gray-600 focus:shadow-none focus:outline-none border border-gray-400 py-1 px-2 rounded ${
          error && "border-red-600"
        }`}
        type={type}
        name={name}
        id={name}
        disabled={disabled}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  </div>
);
export default TextInput;
