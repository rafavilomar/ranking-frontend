import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DocumentSearchIcon } from "@heroicons/react/solid";
import CardTeacher from "../components/Cards.jsx/CardTeacher";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";

const TeacherList = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const { teacherName } = useParams();

  const searchTeacher = async () => {
    const response = await TeacherService.searchTeacher(teacherName);
    if (response) {
      setSearchResult(response);
    }
  };

  const getAllTeachers = async () => {
    const response = await TeacherService.getAllTeachers();
    if (response) {
      setTeacherList(response);
    }
  };

  useEffect(() => {
    searchTeacher();
    getAllTeachers();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col gap-5 mt-6">
        {searchResult.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold ">Resultados encontrados</h3>
            <div className="gap-6 grid grid-cols-4">
              {searchResult.map((teacher) => (
                <CardTeacher key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <DocumentSearchIcon className=" text-gray-400 h-10" />
            <h3 className="text-lg text-gray-500">
              No se han encontrado resultados para: {teacherName}
            </h3>
          </div>
        )}
        <hr />
        <h3 className="text-xl font-semibold ">Quizas te pueda interesar...</h3>
        <div className="gap-6 grid grid-cols-4">
          {teacherList.map((teacher) => (
            <CardTeacher key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TeacherList;
