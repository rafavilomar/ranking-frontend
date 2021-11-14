import React from "react";

import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";

const ActionCardUser = ({
  type = "NORMAL",
  teacherName,
  subject,
  school,
  img,
}) => {
  return (
    <>
      {type === "FULL" && (
        <div className="mb-3">
          <h5 className="font-sans font-semibold text-xl">{teacherName}</h5>
          <p>
            {subject} • {school}
          </p>
        </div>
      )}
      <div className="flex gap-4">
        <div>
          <div className="w-96 h-96 overflow-hidden shadow-md flex items-center justify-center rounded-xl relative">
            <img src={img} alt="teacherProfile" />
            {type == "NORMAL" && (
              <div className="absolute bg-white bottom-0 p-4 left-0 right-0 top-auto">
                <h6 className="font-sans font-semibold text-lg">
                  {teacherName}
                </h6>
                <p className="font-sans">{subject}</p>
              </div>
            )}
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
        {type === "FULL" && (
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-sans">
              <ThumbUpIcon className="text-green-700 h-8" />
              250 Valoraciones
            </span>
            <span className="flex gap-2 items-center font-sans">
              <ThumbDownIcon className="text-red-800 h-8" />
              50 Valoraciones
            </span>
          </div>
        )}
      </div>
    </>
  );
};
export default ActionCardUser;
