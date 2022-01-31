import React from "react"

const CardTeacher = ({ teacher }) => {
    return (
        <div className="flex gap-1 p-2 rounded-sm shadow-sm bg-white">
            {/* IMAGE */}
            <div style={{ maxHeight: 70, maxWidth: 70 }} className="flex items-center justify-center rounded-full overflow-hidden">
                <img
                    alt="profile picture"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>
            {/* INFO */}
            <div className="flex flex-col">
                {/* HEAD */}
                <div>
                    <h6>Pedro Martinez</h6>
                    <p>Institución</p>
                </div>
                <hr />
                {/* SUBJECT */}
                <div>
                    <ul>
                        <li>Asignatura #1</li>
                        <li>Asignatura #2</li>
                        <li>Asignatura #3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CardTeacher;