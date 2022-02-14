import React, { useContext, useState } from "react";

import { ThumbUpIcon, ThumbDownIcon, UserIcon } from "@heroicons/react/solid";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import VoteService from "../../fetcher/services/VoteService";
import GeneralContext from "../../context/context";

const ActionCardUser = ({
  type = "NORMAL",
  teacherName,
  subject,
  school,
  img,
  positiveVotes,
  negativeVotes,
  idTeacher,
}) => {
  const { id, token } = useContext(GeneralContext);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // vote data
  const [comment, setCommet] = useState("");
  const [vote, setVote] = useState();

  const openModal = (newVote) => {
    setVote(newVote);
    setShowModal(true);
  };

  const hideModal = () => {
    setVote("");
    setShowModal(false);
    setCommet("");
  };

  const sendVote = async () => {
    setLoading(true);
    const body = {
      vote,
      comment,
      teacherId: idTeacher,
      usersId: id,
    };
    const response = await VoteService.makeVote(body);
    if (response) {
      window.location.reload();
    }
  };

  const checkVote = () => {
    if (token) {
      return VoteService.checkVote(idTeacher, id);
    }
    return false;
  };

  const modalBox = () => (
    <div className="z-30 bg-opacity-60 flex justify-center items-center bg-gray-800 fixed top-0 left-0 right-0 bottom-0">
      <div className=" bg-white p-3 rounded-md shadow-md w-80 gap-2 flex-col flex">
        <div className="py-1">
          <h3 className="text-lg font-semibold mb-1">Realizar votación</h3>
          <hr />
        </div>
        <div>
          <textarea
            className="w-full text-gray-600 focus:shadow-none focus:outline-none border border-gray-400 py-1 px-2 rounded"
            placeholder="Mensaje (Opcional)"
            rows={5}
          />
        </div>
        <div className="flex justify-between">
          <Button value="Cancelar" funtion={hideModal} />
          <Button
            value="Confirmar"
            loading={loading}
            style="primary"
            funtion={sendVote}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showModal && modalBox()}
      {type === "FULL" && (
        <div className="mb-3">
          <h5 className="font-sans font-semibold text-xl">{teacherName}</h5>
          <p>
            {subject?.name} • {school?.name}
          </p>
        </div>
      )}
      <div className="flex gap-4">
        <div>
          <div className="w-96 h-96 overflow-hidden shadow-md flex items-center justify-center rounded-xl relative">
            {img ? (
              <img src={img} alt="teacherProfile" />
            ) : (
              <UserIcon className="bg-gray-500 text-gray-100" />
            )}
            {type === "NORMAL" && (
              <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto">
                <h6 className="font-sans font-semibold text-lg">
                  {teacherName}
                </h6>
                <p className="font-sans">{subject?.name}</p>
              </div>
            )}
          </div>
          {!checkVote() && (
            <div className="flex items-center gap-6 mt-5 w-96">
              <IconButton>
                <ThumbUpIcon
                  className="text-white h-6"
                  onClick={() => openModal(true)}
                />
              </IconButton>
              <IconButton>
                <ThumbDownIcon
                  className="text-white h-6"
                  onClick={() => openModal(false)}
                />
              </IconButton>
              <Button value="No lo reconozco" full />
            </div>
          )}
        </div>
        {type === "FULL" && (
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-sans">
              <ThumbUpIcon className="text-green-700 h-8" />
              {positiveVotes} Valoraciones
            </span>
            <span className="flex gap-2 items-center font-sans">
              <ThumbDownIcon className="text-red-800 h-8" />
              {negativeVotes} Valoraciones
            </span>
          </div>
        )}
      </div>
    </>
  );
};
export default ActionCardUser;
