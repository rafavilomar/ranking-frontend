import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import Avatar from "react-nice-avatar";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import VoteService from "../../fetcher/services/VoteService";
import GeneralContext from "../../context/context";

const ActionCardUser = ({
  type,
  teacherName,
  subject,
  school,
  img,
  positiveVotes,
  negativeVotes,
  idTeacher,
}) => {
  const { id, token } = useContext(GeneralContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

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
    if (token) {
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
    } else {
      history.push("/login");
    }
  };

  const checkVote = async () => {
    if (token) {
      const response = await VoteService.checkVote(idTeacher, id);
      setShowButton(!response);
    }
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
            value={comment}
            onChange={(e) => setCommet(e.target.value)}
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

  useEffect(() => {
    checkVote();
  }, []);

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
              <Avatar style={{ height: 385, width: 385 }} shape="square" />
            )}
            {type === "NORMAL" && (
              <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto">
                <Link to={`/teacher/${idTeacher}`}>
                  <h6 className="font-sans font-semibold text-lg">
                    {teacherName}
                  </h6>
                </Link>
                <p className="font-sans">{subject?.name}</p>
              </div>
            )}
          </div>
          {showButton && (
            <div className="flex items-center gap-6 mt-5 w-96">
              <IconButton funtion={() => {}}>
                <ThumbUpIcon
                  className="text-white h-6"
                  onClick={() => openModal(true)}
                />
              </IconButton>
              <IconButton funtion={() => {}}>
                <ThumbDownIcon
                  className="text-white h-6"
                  onClick={() => openModal(false)}
                />
              </IconButton>
              <Button value="No lo reconozco" full funtion={() => {}} />
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

ActionCardUser.propTypes = {
  type: PropTypes.oneOf(["FULL", "NORMAL"]),
  teacherName: PropTypes.string.isRequired,
  subject: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  school: PropTypes.shape({ name: PropTypes.string.isRequired }),
  img: PropTypes.string,
  positiveVotes: PropTypes.number,
  negativeVotes: PropTypes.number,
  idTeacher: PropTypes.number.isRequired,
};

ActionCardUser.defaultProps = {
  type: "NORMAL",
  img: null,
  school: null,
  positiveVotes: null,
  negativeVotes: null,
};
