import React from "react";

const Button = ({ value, funtion, type = "normal" }) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (type === "primary") {
      setClassName(" shadow-md bg-green-500 text-white");
    } else if (type === "normal") {
      setClassName(" text-gray-700 border border-gray-400");
    } else {
      setClassName(" text-gray-700")
    }
  }, [type]);

  return (
    <button onClick={funtion} className={`py-2 px-4 rounded-md ${className}`}>
      {value ? value : "Button"}
    </button>
  );
};
export default Button;
