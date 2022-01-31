import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment/locale/es"

import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";

const TeacherProfile = () => {
  const [comments, setComments] = useState(true);
  const [info, setInfo] = useState(false);

  const [name, setName] = useState("Nombre del profesor");
  const [img, setImg] = useState();
  const [postiveVotes, setPositiveVotes] = useState(0);
  const [negativeVotes, setNegativeVotes] = useState(0);

  const [commentList, setCommentList] = useState([]);

  const changeTab = () => {
    setComments(!comments);
    setInfo(!info);
  };

  const getTeacherInfo = async () => {
    const response = await TeacherService.getTeacherInfo();
    console.log(response);
    setName(response.fullname);
    setImg(response.img);
    setPositiveVotes(response.positiveVotes);
    setNegativeVotes(response.negativeVotes);
    setCommentList(response.votes);
  };

  useEffect(async () => {
    await getTeacherInfo();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="flex justify-center">
          <div className="mt-10 mb-10">
            <ActionCardUser
              type="FULL"
              subject="Asignatura"
              school="Centro educativo"
              teacherName={name}
              negativeVotes={negativeVotes}
              positiveVotes={postiveVotes}
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
        {/* Tabs */}
        <div className="bg-white p-3 rounded-md flex gap-3">
          <button
            className={`py-2 px-4 rounded-md font-semibold text-md ${comments ? "bg-green-100 text-green-800" : "text-gray-700"
              } `}
            onClick={changeTab}
            disabled={comments}
          >
            Opiniones
          </button>
          <button
            className={`py-2 px-4 rounded-md font-semibold text-md ${info ? "bg-green-100 text-green-800" : "text-gray-700"
              } `}
            onClick={changeTab}
            disabled={info}
          >
            Más Información
          </button>
        </div>
        {/* Tabs content */}
        <div className="mb-10">
          {comments && (
            <div className="flex flex-col gap-2">
              {commentList.map((comment) => (
                <div className="flex gap-4 p-2" >
                  <div style={{ maxHeight: 70, maxWidth: 70 }} className="flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      alt="profile picture"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>
                  <div key={comment.id} className="font-sans">
                    <div className="flex gap-1 items-center">
                      <h6 className="font-semibold text-base text-gray-800">
                        {`@${comment.username}`}
                      </h6>
                      <span className="text-gray-600">• <Moment locale="es" fromNow date={comment.timestamp} /></span>
                    </div>
                    <p className="text-gray-800 text-sm">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {info && <h3>More Info</h3>}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TeacherProfile;
