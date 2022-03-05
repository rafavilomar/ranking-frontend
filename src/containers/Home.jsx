import React, { useContext, useEffect, useState } from "react";
import CardUser from "../components/Cards.jsx/CardUser";

import Header from "../components/layout/Header";

import Footer from "../components/layout/Footer";
import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import GeneralContext from "../context/context";
import AuthService from "../fetcher/services/AuthService";

const Home = () => {
  const { token, setToken } = useContext(GeneralContext);

  const [topTeacher, setTopTeacher] = useState([]);
  const [randomTeacher, setRandomTeacher] = useState();
  const [show, setShow] = useState(false);

  const twentyMinutes = 20 * 1000 * 60;

  const refreshToken = () => {
    setToken(token);
    setInterval(async () => {
      const newToken = await AuthService.refreshToken();
      setToken(newToken);
    }, twentyMinutes);
  };

  const getTopTeachers = async () => {
    const response = await AuthService.getTopTeachers();
    setTopTeacher([...response]);
  };

  const getRandomTeachers = async () => {
    const response = await AuthService.getRandomTeachers();
    setRandomTeacher(response);
    setShow(true);
  };
  useEffect(() => {
    if (token) {
      refreshToken();
    }
    getRandomTeachers();
    getTopTeachers();
    document.title = "Ranking";
  }, []);

  return (
    show && (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto mt-14 px-16">
          <div className="flex justify-center">
            <div className="flex items-center justify-center flex-col">
              <h3 className="font-sans font-semibold text-center text-3xl mb-5">
                ¿Qué piensas de este profesor?
              </h3>
              <ActionCardUser
                teacherName={randomTeacher.fullname}
                subject={{ name: "Asignatura" }}
                idTeacher={randomTeacher.id}
              />
            </div>
          </div>
        </div>
        {topTeacher.length > 0 && (
          <div className="mt-20 mb-10">
            <h3 className="font-sans font-semibold text-center text-3xl">
              Conoce a los mejores
            </h3>
            <div className="mt-3 max-w-4xl mx-auto gap-2 grid grid-cols-1 md:grid-cols-3">
              {topTeacher.map((teacher, index) => (
                <CardUser
                  idTeacher={teacher.id}
                  key={teacher.id}
                  color={
                    index + 1 === 1
                      ? "bg-gray-400"
                      : index + 1 === 2
                      ? "bg-yellow-400"
                      : "bg-yellow-700"
                  }
                  votes={Number(teacher.votes)}
                  rate={index + 1}
                  type="SMALL"
                  image={teacher.img}
                />
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>
    )
  );
};

export default Home;
