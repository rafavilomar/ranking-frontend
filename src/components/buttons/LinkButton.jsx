import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({value, href}) => {
  return (
    <Link
      to={href ? href: "/"}
      className="py-2 px-4 rounded-md shadow-md bg-green-500 text-white"
    >
      {value? value: "Button"}
    </Link>
  );
};
export default LinkButton;