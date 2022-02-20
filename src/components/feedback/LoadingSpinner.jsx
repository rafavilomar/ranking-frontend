import React from "react";
import PropTypes from "prop-types";

const LoadingSpinner = ({ colorClass }) => (
  <div
    style={{ borderTopColor: "transparent" }}
    className={`spinner-border border-4 animate-spin w-full h-full mr-3 rounded-full ${colorClass}`}
    role="status"
  />
);
export default LoadingSpinner;

LoadingSpinner.propTypes = {
  colorClass: PropTypes.string.isRequired,
};
