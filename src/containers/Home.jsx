import React from "react";
import CardUser from "../components/Cards.jsx/CardUser";

import Header from "../components/layout/Header";

const Home = () => {

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div>
            <div className="mt-5 w-96 h-96 overflow-hidden shadow-md flex items-center justify-center rounded-xl relative">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="noe"
              />
              <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto">
                <h6 className="font-sans font-semibold text-lg">
                  Nombre del profesor
                </h6>
                <p className="font-sans">Asignatura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48">
            <h3 className="font-sans font-semibold text-center text-3xl">
            Conoce a los mejores
            </h3>
      </div>
      <div className="mt-3 max-w-7xl mx-auto flex justify-center gap-5 items-center">

        <CardUser color="bg-gray-400" rate={2} type="SMALL" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <CardUser color="bg-yellow-400" rate={1} image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <CardUser color="bg-yellow-700" rate={3} type="SMALL" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
    </div>
  );
};

export default Home;
