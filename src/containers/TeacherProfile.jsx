import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/es";
import Avatar from "react-nice-avatar";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";

import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";

const TeacherProfile = () => {
  const [comments, setComments] = useState(true);
  const [info, setInfo] = useState(false);

  const [id, setId] = useState();
  const [name, setName] = useState("Nombre del profesor");
  const [img, setImg] = useState();
  const [postiveVotes, setPositiveVotes] = useState(0);
  const [negativeVotes, setNegativeVotes] = useState(0);
  const [school, setSchool] = useState();
  const [subject, setSubject] = useState();

  const [commentList, setCommentList] = useState([]);

  const { teacherId } = useParams();

  const changeTab = () => {
    setComments(!comments);
    setInfo(!info);
  };

  const getTeacherInfo = async () => {
    const response = await TeacherService.getTeacherInfo(teacherId);
    setId(response.id);
    setName(response.fullname);
    setImg(response.img);
    setPositiveVotes(response.positiveVotes);
    setNegativeVotes(response.negativeVotes);
    setCommentList(response.votes);
    setSubject(response.subjects[0]);
    setSchool(response.schools[0]);
  };

  useEffect(() => {
    getTeacherInfo();
    document.title = "Ranking | Teacher profile";
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-16">
        {/* Main content */}
        <div className="flex justify-center">
          <div className="mt-10 mb-10">
            <ActionCardUser
              type="FULL"
              subject={subject}
              school={school}
              teacherName={name}
              negativeVotes={negativeVotes}
              positiveVotes={postiveVotes}
              img={img}
              idTeacher={id}
            />
          </div>
        </div>
        {/* Tabs */}
        <div className="bg-white p-3 rounded-md flex gap-3">
          <button
            type="button"
            className={`py-2 px-4 rounded-md font-semibold text-md ${
              comments ? "bg-green-100 text-green-800" : "text-gray-700"
            } `}
            onClick={changeTab}
            disabled={comments}
          >
            Opiniones
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded-md font-semibold text-md ${
              info ? "bg-green-100 text-green-800" : "text-gray-700"
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
                <div key={comment.id} className="flex gap-4 p-2">
                  <div
                    style={{ maxHeight: 70, maxWidth: 70 }}
                    className="flex items-center justify-center rounded-full overflow-hidden"
                  >
                    {comment.users.img ? (
                      <img alt="profile" src={comment.users.img} />
                    ) : (
                      <Avatar style={{ width: 86, height: 86 }} />
                    )}
                  </div>
                  <div key={comment.id} className="font-sans">
                    <div className="flex gap-1 items-center">
                      <h6 className="font-semibold text-base text-gray-800">
                        {`@${comment.users.idAccount.username}`}
                      </h6>
                      <span className="text-gray-600">
                        •
                        <Moment
                          locale="es"
                          className="ml-1"
                          fromNow
                          date={comment.timestamp}
                        />
                      </span>
                      {comment.vote ? (
                        <ThumbUpIcon className="text-gray-600 h-4 w-4" />
                      ) : (
                        <ThumbDownIcon className="text-gray-600 h-3 w-3" />
                      )}
                    </div>
                    <p className="text-gray-800 text-sm">
                      {comment.comment || (
                        <span className="italic">Sin comentario...</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {info && <h3>Proximamente..</h3>}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TeacherProfile;
