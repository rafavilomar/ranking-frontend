import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../feedback/LoadingSpinner";

const Button = ({ value, funtion, type, loading, style, full }) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (style === "primary") {
      setClassName(" shadow-md bg-green-500 text-white");
    } else if (style === "normal") {
      setClassName(" text-gray-700 border border-gray-400");
    } else {
      setClassName(" text-gray-700");
    }
  }, [style]);

  return (
    <button
      disabled={loading}
      type={type}
      onClick={funtion}
      className={`flex justify-center py-2 px-4 rounded-md text-lg font-semibold ${className} ${
        full && "w-full"
      } ${loading && "cursor-not-allowed"}`}
    >
      {loading ? (
        <div className="w-6 h-6">
          <LoadingSpinner colorClass="border-white-700" />
        </div>
      ) : (
        value
      )}
    </button>
  );
};
export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  funtion: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  loading: PropTypes.bool,
  style: PropTypes.oneOf(["normal", "tertiary", "primary"]),
  full: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  loading: false,
  style: "normal",
  full: false,
  funtion: () => {},
};
