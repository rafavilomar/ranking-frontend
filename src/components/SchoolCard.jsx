import React, { useState } from "react";
import PropTypes from "prop-types";

import { AcademicCapIcon } from "@heroicons/react/solid";
import SchoolService from "../fetcher/services/SchoolService";

const SchoolCard = ({ school, id }) => {
  const [selected, setSelected] = useState(false);

  const selectSchool = async () => {
    if (!selected) {
      const response = await SchoolService.createInterest({
        users: id,
        school: school.id,
      });
      if (response) {
        setSelected(true);
      }
    }
  };

  return (
    <button
      onClick={selectSchool}
      className={`shadow-md hover:shadow-lg cursor-pointer justify-center items-center bg-white rounded-md h-28 w-28 flex flex-col ${
        selected && "bg-green-600"
      }`}
    >
      <AcademicCapIcon
        className={`h-14 w-14  ${selected ? "text-white" : "text-gray-700"}`}
      />
      <p
        className={`font-semibold ${selected ? "text-white" : "text-gray-700"}`}
      >
        {school.name}
      </p>
    </button>
  );
};
export default SchoolCard;

SchoolCard.propTypes = {
  school: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
