import React, { useContext, useEffect } from "react";

import Button from "../components/buttons/Button";
import TextInput from "../components/forms/TextInput";
import Header from "../components/layout/Header";

import { PencilIcon } from "@heroicons/react/solid";
import Footer from "../components/layout/Footer";
import UserService from "../fetcher/services/UserService";
import GeneralContext from "../context/context";

const MyProfile = () => {

  const { id } = useContext(GeneralContext);

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
          <div className="relative h-60 w-60 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              alt="none"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <button className="absolute right-2 bottom-2 z-10 bg-gray-600 p-2 rounded-md ">
              <PencilIcon className="text-white h-5" />
            </button>
          </div>
        </div>
        {/* Info */}
        <div className="col-span-2 bg-white h-auto overflow-hidden box-border rounded-md">
          <div className="p-5">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyProfile;
