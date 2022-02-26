import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/buttons/Button";
import SchoolCard from "../components/SchoolCard";
import GeneralContext from "../context/context";
import SchoolService from "../fetcher/services/SchoolService";

const SchoolList = () => {
  const history = useHistory();
  const { id } = useContext(GeneralContext);
  const [schoolList, setSchoolList] = useState([]);

  const getAllSchools = async () => {
    const response = await SchoolService.getAllSchools();
    setSchoolList([...response]);
  };

  const finishProcess = () => {
    history.push("/");
  };

  useEffect(() => {
    getAllSchools();
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center px-4 absolute top-0 left-0 right-0 bottom-0">
      <h1 className="font-semibold font-sans text-xl">
        Selecciona las instituciones de tu interes
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {schoolList.map((school) => (
          <SchoolCard key={school.id} school={school} id={id} />
        ))}
      </div>
      <Button value="Continuar" style="primary" funtion={finishProcess} />
    </div>
  );
};
export default SchoolList;
