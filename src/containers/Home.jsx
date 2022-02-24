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

  useEffect(() => {
    if (token) {
      refreshToken();
      getTopTeachers();
    }
    document.title = "Ranking";
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto mt-14">
        <div className="flex justify-center">
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-sans font-semibold text-center text-3xl mb-5">
              ¿Qué piensas de este profesor?
            </h3>
            <ActionCardUser
              teacherName="Nombre del Profesor"
              subject={{ name: "Asignatura" }}
              idTeacher={1}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 mb-10">
        <h3 className="font-sans font-semibold text-center text-3xl">
          Conoce a los mejores
        </h3>
        <div className="mt-3 max-w-7xl mx-auto flex justify-center gap-5 items-center">
          {topTeacher.map((teacher, index) => (
            <CardUser
              key={teacher.id}
              color={
                index + 1 === 1
                  ? "bg-gray-400"
                  : index + 1 === 2
                  ? "bg-yellow-400"
                  : "bg-yellow-700"
              }
              votes={teacher.votes}
              rate={index + 1}
              type={index + 1 === 1 ? "NORMAL" : "SMALL"}
              image={teacher.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
