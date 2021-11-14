import React, { useState } from "react";
import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const TeacherProfile = () => {
  const [comments, setComments] = useState(true);
  const [info, setInfo] = useState(false);

  const changeTab = () => {
    setComments(!comments);
    setInfo(!info);
  };

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
              teacherName="Nombre del profesor"
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
              {[1,2,3,4,5].map((e) => (
              <div key={e} className="p-2 font-sans">
                <div className="flex gap-1 items-center">
                  <h6 className="font-semibold text-base text-gray-800">@username</h6>
                  <span className="text-gray-600 text-xs">• 06:30 pm</span>
                </div>
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                  excepturi amet eligendi sequi impedit aliquam quasi illo
                  vitae. Vel aperiam veniam cum nesciunt explicabo voluptatem
                  minima iste similique nam laborum.
                </p>
              </div>
              ))}
            </div>
          )}
          {info && (
            <h3>More Info</h3>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TeacherProfile;
