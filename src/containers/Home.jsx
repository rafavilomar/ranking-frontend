import React from "react";
import IconButton from "../components/buttons/IconButton";
import CardUser from "../components/Cards.jsx/CardUser";

import Header from "../components/layout/Header";

import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import Button from "../components/buttons/Button";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto mt-14">
        <div className="flex justify-center">
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-sans font-semibold text-center text-3xl ">
              ¿Qué piensas de este profesor?
            </h3>
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
            <div className="flex items-center gap-6 mt-5 w-96">
              <IconButton>
                <ThumbUpIcon className="text-white h-6" />
              </IconButton>
              <IconButton>
                <ThumbDownIcon className="text-white h-6" />
              </IconButton>
              <Button value="No lo reconozco" full />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="font-sans font-semibold text-center text-3xl">
          Conoce a los mejores
        </h3>
      </div>
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
      <Footer/>
    </div>
  );
};

export default Home;
