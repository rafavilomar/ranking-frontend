import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { UserCircleIcon } from "@heroicons/react/solid";

const CardTeacher = ({ teacher }) => (
  <Link to={`/teacher/${teacher.id}`}>
    <div className="flex gap-3 p-2 rounded-md cursor-pointer shadow-sm bg-white hover:shadow-md">
      {/* IMAGE */}
      <div
        style={{ maxHeight: 70, maxWidth: 70 }}
        className="flex items-center justify-center rounded-full overflow-hidden"
      >
        {teacher.img ? (
          <img alt="profile" src={teacher.img} />
        ) : (
          <UserCircleIcon className="h-24 w-24 text-gray-500" />
        )}
      </div>
      {/* INFO */}
      <div className="flex flex-col gap-1 w-full">
        {/* HEAD */}
        <div>
          <h6 className="font-semibold">{teacher.fullname}</h6>
          <p className="text-gray-600">{teacher.schools[0].name}</p>
        </div>
        <hr />
        {/* SUBJECT */}
        <div>
          <ol>
            {teacher.subjects.map((subject) => (
              <li key={subject.id} className="text-gray-600">
                {`• ${subject.name}`}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </Link>
);
export default CardTeacher;

CardTeacher.propTypes = {
  teacher: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    schools: PropTypes.arrayOf(PropTypes.object).isRequired,
    subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
