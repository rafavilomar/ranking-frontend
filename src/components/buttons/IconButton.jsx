import React from "react";
import PropTypes from "prop-types";

const IconButton = ({
  children,
  funtion,
  type = "button",
  style = "normal",
}) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (style === "primary") {
      setClassName(" shadow-md bg-green-500 text-white");
    } else if (style === "normal") {
      setClassName(" text-gray-700 border border-gray-400");
    } else {
      setClassName(" text-gray-700");
    }
  }, [className, style]);

  return (
    <button
      type={type || "button"}
      onClick={funtion}
      className="right-2 bottom-2 z-10 bg-gray-600 p-2 rounded-md"
    >
      {children}
    </button>
  );
};
export default IconButton;

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  funtion: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  style: PropTypes.oneOf(["normal", "tertiary", "primary"]),
};

IconButton.defaultProps = {
  type: "button",
  style: "normal",
};
