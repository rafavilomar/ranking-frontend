import React, { useContext, useEffect } from "react";
import CardUser from "../components/Cards.jsx/CardUser";

import Header from "../components/layout/Header";

import Footer from "../components/layout/Footer";
import ActionCardUser from "../components/Cards.jsx/ActionCardUser";
import GeneralContext from "../context/context";
import AuthService from "../fetcher/services/AuthService";

const Home = () => {
  const { token, setToken } = useContext(GeneralContext);
  const twentyMinutes = 20 * 1000 * 60;

  const refreshToken = () => {
    setToken(token);
    setInterval(async () => {
      const newToken = await AuthService.refreshToken();
      setToken(newToken);
    }, twentyMinutes);
  };

  useEffect(() => {
    if (token) {
      refreshToken();
    }
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
          <CardUser
            color="bg-gray-400"
            rate={2}
            type="SMALL"
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <CardUser
            color="bg-yellow-400"
            rate={1}
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <CardUser
            color="bg-yellow-700"
            rate={3}
            type="SMALL"
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
