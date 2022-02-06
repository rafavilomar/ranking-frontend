import React, { useEffect, useState } from "react";
import CardTeacher from "../components/Cards.jsx/CardTeacher";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";

const TeacherList = ({ match }) => {

    const [teacherList, setTeacherList] = useState([]);

    const searchTeacher = async () => {
        const teacherName = match.params.teacherName;
        const response = await TeacherService.searchTeacher(teacherName);
        if (response) {
            setTeacherList(response);
        }
    }

    useEffect(() => {
        searchTeacher();
    }, [match])

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col gap-5 mt-6">
                <h3 className="text-xl font-semibold ">Resultados encontrados</h3>
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