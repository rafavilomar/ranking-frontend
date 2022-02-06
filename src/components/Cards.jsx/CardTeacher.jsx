import React from "react"
import { Link } from "react-router-dom";

const CardTeacher = ({ teacher }) => {
    return (
        <Link to={`/teacher/${teacher.id}`} >
            <div className="flex gap-3 p-2 rounded-md cursor-pointer shadow-sm bg-white">
                {/* IMAGE */}
                <div style={{ maxHeight: 70, maxWidth: 70 }} className="flex items-center justify-center rounded-full overflow-hidden">
                    {/* TODO: use img */}
                    <img
                        alt="profile picture"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                </div>
                {/* INFO */}
                <div className="flex flex-col gap-1 w-full">
                    {/* HEAD */}
                    <div >
                        <h6 className="font-semibold" >{teacher.fullname}</h6>
                        <p className="text-gray-600">{teacher.schools[0].name}</p>
                    </div>
                    <hr />
                    {/* SUBJECT */}
                    <div>
                        <ol>
                            {teacher.subjects.map(subject => (
                                <li key={subject.id} className="text-gray-600">{`• ${subject.name}`}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardTeacher;