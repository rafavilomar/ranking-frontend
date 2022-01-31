import React from "react"

const CardTeacher = ({ teacher }) => {
    return (
        <div className="flex gap-3 p-2 rounded-md cursor-pointer shadow-sm bg-white">
            {/* IMAGE */}
            <div style={{ maxHeight: 70, maxWidth: 70 }} className="flex items-center justify-center rounded-full overflow-hidden">
                <img
                    alt="profile picture"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>
            {/* INFO */}
            <div className="flex flex-col gap-1 w-full">
                {/* HEAD */}
                <div >
                    <h6 className="font-semibold" >Pedro Martinez</h6>
                    <p className="text-gray-600">Institución</p>
                </div>
                <hr />
                {/* SUBJECT */}
                <div>
                    <ol>
                        <li className="text-gray-600">• Asignatura #1</li>
                        <li className="text-gray-600">• Asignatura #2</li>
                        <li className="text-gray-600">• Asignatura #3</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default CardTeacher;