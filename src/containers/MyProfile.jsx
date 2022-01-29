import React, { useContext, useEffect, useState } from "react";

import Button from "../components/buttons/Button";
import TextInput from "../components/forms/TextInput";
import Header from "../components/layout/Header";

import { PencilIcon } from "@heroicons/react/solid";
import Footer from "../components/layout/Footer";
import UserService from "../fetcher/services/UserService";
import GeneralContext from "../context/context";
import { ThumbsUp } from "react-ionicons";

const MyProfile = () => {

  const { id } = useContext(GeneralContext);

  const [account, setAccount] = useState(true);
  const [activities, setActivities] = useState(false);
  const [logout, setLogout] = useState(false);

  const changeTab = (tab) => {
    setAccount(false);
    setActivities(false);
    setLogout(false)

    if (tab === 0) {
      setAccount(true)
    } else if (tab === 1) {
      setActivities(true)
    } else {
      setLogout(true)
    }

  };

  const loadUserInfo = async () => {
    const response = await UserService.getUserInfo(id);
    console.log(response);
  }

  useEffect(() => {
    loadUserInfo();
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-7 grid md:grid-cols-3 sm:grid-cols-1 gap-2 mb-14">
        {/* Image */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 bg-white p-2 rounded-md content-start" style={{ height: "fit-content" }} >
            <div className="relative h-60 w-60 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                alt="none"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <button className="absolute right-2 bottom-2 z-10 bg-gray-600 p-2 rounded-md ">
                <PencilIcon className="text-white h-5" />
              </button>
            </div>
            {/* Tabs */}
            <div className="flex flex-col gap-3">
              <button
                className={`py-2 px-4 rounded-md font-semibold text-md ${account ? "bg-green-100 text-green-800" : "text-gray-700"
                  } `}
                onClick={() => changeTab(0)}
                disabled={account}
              >
                Mi cuenta
              </button>
              <button
                className={`py-2 px-4 rounded-md font-semibold text-md ${activities ? "bg-green-100 text-green-800" : "text-gray-700"
                  } `}
                onClick={() => changeTab(1)}
                disabled={activities}
              >
                Actividades
              </button>
              <button
                className={`py-2 px-4 rounded-md font-semibold text-md ${logout ? "bg-green-100 text-green-800" : "text-gray-700"
                  } `}
                onClick={() => changeTab(2)}
                disabled={logout}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        {/* Info */}
        <div className="col-span-2 bg-white h-auto overflow-hidden box-border rounded-md p-5" style={{ height: "fit-content" }} >
          {account && (<>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-xl">
                  Información básica
                </h3>
                <hr />
              </div>
              <TextInput label="Usuario" name="username" />
              <TextInput label="Correo electrónico" name="email" type="email" />
              <div>
                <Button value="Actualizar perfil" />
              </div>
            </section>
            <section className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-xl">Contraseña</h3>
                <hr />
              </div>
              <TextInput label="Nueva contraseña" />
              <TextInput label="Repetir contraseña" disabled />
              <div>
                <Button value="Cambiar contraseña" />
              </div>
            </section>
          </>)}
          {activities && (
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-xl">
                  Historial de actividades
                </h3>
                <hr />
              </div>
              <div className="flex gap-5 rounded-sm p-2">
                <div className="py-1"><ThumbsUp /></div>
                <div className="flex flex-col gap-2">
                  <div><span className="font-medium">Para:</span> <span className="text-gray-600">Pedro Martinez</span> • <span className="font-medium">Fecha:</span> <span className="text-gray-600">6:39pm</span></div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo excepturi amet eligendi sequi impedit aliquam quasi illo vitae. Vel aperiam veniam cum nesciunt explicabo voluptatem minima iste similique nam laborum.</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyProfile;
