import React from "react";

import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div>
            <h3 className="font-sans font-semibold text-center text-3xl">
              ¿Qué piensas de este profesor? 🤔
            </h3>
            <div className="mt-5 w-96 h-96 overflow-hidden shadow-md flex items-center justify-center rounded-xl relative">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="noe"
              />
              <div className="absolute bg-gray-200 bottom-0 p-4 left-0 right-0 top-auto">
                <h6 className="font-sans font-semibold text-lg">Nombre del profesor</h6>
                <p className="font-sans">Asignatura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
