import React from "react";
import PropTypes from "prop-types";

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

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "email"]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  error: false,
  type: "text",
  required: false,
  disabled: false,
};
