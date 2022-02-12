import React from "react";

const IconButton = ({ children, funtion, type = "button", style = "normal" }) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (style === "primary") {
      setClassName(" shadow-md bg-green-500 text-white");
    } else if (style === "normal") {
      setClassName(" text-gray-700 border border-gray-400");
    } else {
      setClassName(" text-gray-700")
    }
  }, [className, style]);

  return (
    <button type={type} onClick={funtion} className="right-2 bottom-2 z-10 bg-gray-600 p-2 rounded-md">
      {children}
    </button>
  );
}
export default IconButton;