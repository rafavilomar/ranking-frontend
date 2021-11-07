import React from "react";

const TextInput = ({ name, label, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="mt-1">
        <input
          className="focus:shadow-none focus:outline-none border border-gray-400 py-1 px-2 rounded"
          type={type}
          name={name}
          id={name}
        />
      </div>
    </div>
  );
};
export default TextInput;
