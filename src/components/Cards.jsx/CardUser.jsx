import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "react-nice-avatar";
import { Link } from "react-router-dom";

const CardUser = ({ type, image, rate, color, votes, idTeacher }) => {
  const [className, setClassName] = React.useState();

  useEffect(() => {
    if (type === "NORMAL") {
      setClassName(" w-80 h-96");
    } else {
      setClassName("w-64 h-72");
    }
  }, [type]);

  return (
    <Link to={`/teacher/${idTeacher}`}>
      <div
        className={`${className} rounded-xl mx-auto mt-5 shadow-md relative flex items-center justify-center`}
      >
        <span
          className={`${color} font-sans text-2xl font-semibold absolute z-50 flex justify-center items-center -top-5 left-auto right-auto bottom-auto rounded-br-full rounded-bl-full bg-red-400 w-14 h-14`}
        >
          {rate}
        </span>
        <div className="overflow-hidden max-h-full rounded-xl max-w-full flex items-center justify-center">
          {image != null ? (
            <img src={image} alt="teacherProfile" />
          ) : (
            <Avatar style={{ height: 385, width: 385 }} shape="square" />
          )}

          <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto rounded-bl-xl rounded-br-xl">
            <p className="font-sans">{votes} valoraciones positivas</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardUser;

CardUser.propTypes = {
  type: PropTypes.oneOf(["SMALL", "NORMAL"]),
  image: PropTypes.string,
  rate: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  votes: PropTypes.number,
  idTeacher: PropTypes.number.isRequired,
};

CardUser.defaultProps = {
  type: "NORMAL",
  votes: null,
  image: null,
};
