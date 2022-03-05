import React, { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/es";
import { PencilIcon, ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import Avatar from "react-nice-avatar";

import Button from "../components/buttons/Button";
import TextInput from "../components/forms/TextInput";
import Header from "../components/layout/Header";

import Footer from "../components/layout/Footer";
import UserService from "../fetcher/services/UserService";
import GeneralContext from "../context/context";
import removeAll from "../utils/localStorage";

const MyProfile = () => {
  const { id, username, img } = useContext(GeneralContext);
  const history = useHistory();

  // TABS
  const [account, setAccount] = useState(true);
  const [activities, setActivities] = useState(false);

  // USER INFO
  const [email, setEmail] = useState();
  const [votes, setVotes] = useState([]);

  const changeTab = (tab) => {
    setAccount(false);
    setActivities(false);

    if (tab === 0) {
      setAccount(true);
    } else if (tab === 1) {
      setActivities(true);
    }
  };

  const loadUserInfo = async () => {
    const response = await UserService.getUserInfo(id);
    setEmail(response.email);
    setVotes(response.votes);
  };

  const logout = () => {
    removeAll();
    history.push("/");
  };

  useEffect(() => {
    loadUserInfo();
    document.title = "Ranking | Profile";
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-7xl sm:px-16 mx-auto mt-7 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-2 gap-y-2 mb-14">
        {/* Image */}
        <div className="flex justify-center">
          <div
            className="sm:w-auto w-full flex flex-col gap-2 bg-white p-2 rounded-md content-start"
            style={{ height: "fit-content" }}
          >
            <div className="relative h-60 w-60 m-auto rounded-lg overflow-hidden flex items-center justify-center">
              {img ? (
                <img src={img} alt="profile" />
              ) : (
                <Avatar style={{ height: 240, width: 240 }} shape="square" />
              )}
              <button
                type="button"
                className="absolute right-2 bottom-2 z-10 bg-gray-600 p-2 rounded-md "
              >
                <PencilIcon className="text-white h-5" />
              </button>
            </div>
            {/* Tabs */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className={`py-2 px-4 rounded-md font-semibold text-md ${
                  account ? "bg-green-100 text-green-800" : "text-gray-700"
                } `}
                onClick={() => changeTab(0)}
                disabled={account}
              >
                Mi cuenta
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md font-semibold text-md ${
                  activities ? "bg-green-100 text-green-800" : "text-gray-700"
                } `}
                onClick={() => changeTab(1)}
                disabled={activities}
              >
                Actividades
              </button>
              <button
                type="button"
                className="py-2 px-4 rounded-md font-semibold text-md text-gray-700"
                onClick={() => logout()}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        {/* Info */}
        <div
          className="col-span-2 bg-white h-auto overflow-hidden box-border rounded-md p-5"
          style={{ height: "fit-content" }}
        >
          {/* Account */}
          {account && (
            <>
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-semibold text-xl">
                    Información básica
                  </h3>
                  <hr />
                </div>
                <TextInput label="Usuario" name="username" value={username} />
                <TextInput
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  value={email}
                />
                <div>
                  <Button value="Actualizar perfil" />
                </div>
              </section>
              <section className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-semibold text-xl">
                    Contraseña
                  </h3>
                  <hr />
                </div>
                <TextInput label="Nueva contraseña" />
                <TextInput label="Repetir contraseña" disabled />
                <div>
                  <Button value="Cambiar contraseña" />
                </div>
              </section>
            </>
          )}
          {/* Activities */}
          {activities && (
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-xl">
                  Historial de actividades
                </h3>
                <hr />
              </div>
              {votes.map((vote) => (
                <div key={vote.id} className="flex gap-5 rounded-sm p-2">
                  <div className="py-1">
                    {vote.vote ? (
                      <ThumbUpIcon className="h-7" />
                    ) : (
                      <ThumbDownIcon className="h-7" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="font-medium">Para:</span>
                      <span className="text-gray-600">{` ${vote.teacher.fullname}`}</span>
                      <span> • </span>
                      <span className="font-medium">Fecha:</span>
                      <span className="text-gray-600">
                        {" "}
                        <Moment locale="es" fromNow date={vote.timestamp} />
                      </span>
                    </div>
                    {vote.comment && <p className="text-sm">{vote.comment}</p>}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyProfile;
