import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkButton = ({ value, href, style }) => {
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
    <Link
      to={href}
      className={`font-medium py-2 px-4 rounded-md text-center ${className}`}
    >
      {value}
    </Link>
  );
};
export default LinkButton;

LinkButton.propTypes = {
  value: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.oneOf(["normal", "tertiary", "primary"]),
};

LinkButton.defaultProps = {
  value: "Button",
  href: "/",
  style: "normal",
};
