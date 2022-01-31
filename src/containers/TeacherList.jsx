import React, { useState } from "react";
import CardTeacher from "../components/Cards.jsx/CardTeacher";
import Header from "../components/layout/Header";

const TeacherList = () => {

    const [teacherList, setTeacherList] = useState([1, 1, 1, 1, 1, 1]);

    return (
        <>
            <Header />
            <div>
                <h3>Resultados encontrados</h3>
                {teacherList.map(e => (
                    <CardTeacher />
                ))}
            </div>
        </>
    )
}
export default TeacherList;