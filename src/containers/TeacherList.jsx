import React, { useState } from "react";
import CardTeacher from "../components/Cards.jsx/CardTeacher";
import Header from "../components/layout/Header";

const TeacherList = () => {

    const [teacherList, setTeacherList] = useState([1, 1, 1, 1, 1, 1]);

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col gap-5 mt-6">
                <h3 className="text-xl font-semibold ">Resultados encontrados</h3>
                <div className="gap-6 grid grid-cols-4">
                    {teacherList.map(e => (
                        <CardTeacher />
                    ))}
                </div>
            </div>
        </>
    )
}
export default TeacherList;