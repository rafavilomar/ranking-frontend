import React from "react";
import { Link } from "react-router-dom";

const LinkButton= ({value, href, type = "normal"}) => {

  const [className, setClassName] = React.useState();

  React.useEffect(()=> {
    type === "primary" 
      ? setClassName(" shadow-md bg-green-500 text-white") 
      : setClassName(" text-gray-700 border border-gray-400")
  }, [])

  return (
    <Link
      to={href ? href: "/"}
      className={`py-2 px-4 rounded-md ${className}`}
    >
      {value? value: "Button"}
    </Link>
  );
};
export default LinkButton;