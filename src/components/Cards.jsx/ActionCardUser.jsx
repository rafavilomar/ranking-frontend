import React from "react";

import { ThumbUpIcon, ThumbDownIcon, UserIcon } from "@heroicons/react/solid";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import VoteService from "../../fetcher/services/VoteService";

const ActionCardUser = ({
  type = "NORMAL",
  teacherName,
  subject,
  school,
  img,
  positiveVotes,
  negativeVotes,
}) => {
  let voteService = new VoteService();

  return (
    <>
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
          <div className="flex items-center gap-6 mt-5 w-96">
            <IconButton>
              <ThumbUpIcon
                className="text-white h-6"
                onClick={() => voteService.makeVote()}
              />
            </IconButton>
            <IconButton>
              <ThumbDownIcon
                className="text-white h-6"
                onClick={() => voteService.makeVote()}
              />
            </IconButton>
            <Button value="No lo reconozco" full />
          </div>
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
