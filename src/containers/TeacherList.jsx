import React, { useEffect, useState } from "react";
import CardTeacher from "../components/Cards.jsx/CardTeacher";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";

const TeacherList = ({ match }) => {

    const [teacherList, setTeacherList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const searchTeacher = async () => {
        const teacherName = match.params.teacherName;
        const response = await TeacherService.searchTeacher(teacherName);
        response && setSearchResult(response);
    }

    const getAllTeachers = async () => {
        const response = await TeacherService.getAllTeachers();
        console.log(response);
        response && setTeacherList(response);
    }

    useEffect(() => {
        searchTeacher();
        getAllTeachers();
    }, [match])

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col gap-5 mt-6">
                <h3 className="text-xl font-semibold ">Resultados encontrados</h3>
                <div className="gap-6 grid grid-cols-4">
                    {searchResult.map(teacher => (
                        <CardTeacher key={teacher.id} teacher={teacher} />
                    ))}
                </div>
                <hr />
                <h3 className="text-xl font-semibold ">Quizas te pueda interesar...</h3>
                <div className="gap-6 grid grid-cols-4">
                    {teacherList.map(teacher => (
                        <CardTeacher key={teacher.id} teacher={teacher} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default TeacherList;