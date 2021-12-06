import React, { useState, useEffect } from "react";
import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TeacherService from "../fetcher/services/TeacherService";
import VoteService from "../fetcher/services/VoteService";

const TeacherProfile = () => {
  const [comments, setComments] = useState(true);
  const [info, setInfo] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("Nombre del profesor");
  const [img, setImg] = useState();
  const [postiveVotes, setPositiveVotes] = useState(0);
  const [negativeVotes, setNegativeVotes] = useState(0);

  const [commentList, setCommentList] = useState([]);

  let teacherService = new TeacherService();
  let voteService = new VoteService();

  const changeTab = () => {
    setComments(!comments);
    setInfo(!info);
  };

  const getTeacherInfo = async () => {
    const response = await teacherService.getTeacherInfo();
    setId(response[0].teacherid);
    setName(response[0].teachername);
    setImg(response[0].img);
    setPositiveVotes(response[0].positivevotes);
    setNegativeVotes(response[0].negativevotes);
  };

  const getComments = async () => {
    const response = await voteService.getCommentByTeacher();
    setCommentList(response);
  };

  useEffect(async () => {
    console.log(process.env);
    await getTeacherInfo();
    await getComments();
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
            className={`py-2 px-4 rounded-md font-semibold text-md ${
              comments ? "bg-green-100 text-green-800" : "text-gray-700"
            } `}
            onClick={changeTab}
            disabled={comments}
          >
            Opiniones
          </button>
          <button
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
                <div key={comment.id} className="p-2 font-sans">
                  <div className="flex gap-1 items-center">
                    <h6 className="font-semibold text-base text-gray-800">
                      {`@${comment.username}`}
                    </h6>
                    <span className="text-gray-600 text-xs">{`• ${comment.timestamp}`}</span>
                  </div>
                  <p className="text-gray-800 text-sm">
                    {comment.comment}
                  </p>
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
