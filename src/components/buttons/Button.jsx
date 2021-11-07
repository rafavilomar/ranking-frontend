import React from "react";

const Button = ({ value, funtion, type = "normal" }) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    type === "primary"
      ? setClassName(" shadow-md bg-green-500 text-white")
      : setClassName(" text-gray-700 border border-gray-400");
  }, [type]);

  return (
    <button onClick={funtion} className={`py-2 px-4 rounded-md ${className}`}>
      {value ? value : "Button"}
    </button>
  );
};
export default Button;
