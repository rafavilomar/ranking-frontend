import React from "react";

const Button = ({ value, funtion, type = "button", style = "normal", full = false}) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (style === "primary") {
      setClassName(" shadow-md bg-green-500 text-white");
    } else if (style === "normal") {
      setClassName(" text-gray-700 border border-gray-400");
    } else {
      setClassName(" text-gray-700")
    }
  }, []);

  return (
    <button type={type} onClick={funtion} className={`py-2 px-4 rounded-md ${className} ${full && "w-full"}`}>
      {value ? value : "Button"}
    </button>
  );
};
export default Button;
