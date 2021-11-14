import React from "react";

const CardUser = ({
  type = "NORMAL",
  image,
  title,
  content,
  rate,
  color,
  votes = 300,
}) => {
  const [className, setClassName] = React.useState();

  React.useEffect(
    (rule) => {
      if (type === "NORMAL") {
        setClassName(" w-80 h-96");
      } else {
        setClassName("w-64 h-72");
      }
    },
    [type]
  );

  return (
    <div
      className={`${className} rounded-xl mt-5 shadow-md relative flex items-center justify-center`}
    >
      <span
        className={`${color} font-sans text-2xl font-semibold absolute flex justify-center items-center -top-5 left-auto right-auto bottom-auto rounded-br-full rounded-bl-full bg-red-400 w-14 h-14`}
      >
        {rate}
      </span>
      <div className="overflow-hidden max-h-full rounded-xl max-w-full flex items-center justify-center">
        <img src={image} alt="noe" />
        {type === "NORMAL" && (
          <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto rounded-bl-xl rounded-br-xl">
            <p className="font-sans">{votes} valoraciones</p>
          </div>
        )}
        {/* <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto">
        <h6 className="font-sans font-semibold text-lg">Nombre del profesor</h6>
        <p className="font-sans">Asignatura</p>
      </div> */}
      </div>
    </div>
  );
};
export default CardUser;
