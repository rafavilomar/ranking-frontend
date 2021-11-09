import React from "react";
import Button from "../components/buttons/Button";
import TextInput from "../components/forms/TextInput";
import Header from "../components/layout/Header";

const MyProfile = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-5 grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        {/* Image */}
        <div className="flex justify-center">
          <div className="h-60 w-60 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              alt="none"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
        {/* Info */}
        <div className="col-span-2 bg-white h-auto overflow-hidden box-border rounded-md">
          <div className="p-5">
            <section className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-xl">
                Información básica
              </h3>
              <hr />
              <TextInput label="Usuario" name="username" />
              <TextInput label="Correo electrónico" name="email" type="email" />
            </section>
            <section className="mt-8 flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-xl">Contraseña</h3>
              <hr />
              <TextInput label="Nueva contraseña" />
              <TextInput label="Repetir contraseña" disabled />
              <div>
                <Button value="Cambiar contraseña" />
              </div>
            </section>
          </div>
          <div className="flex justify-end bg-gray-200 p-5">
            <Button value="Actualizar perfil" style="primary" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
