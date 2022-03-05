import React, { useContext } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Avatar from "react-nice-avatar";

import LinkButton from "../buttons/LinkButton";
import Branch from "./Branch";
import GeneralContext from "../../context/context";

const Header = () => {
  const { token, setSearchTeacher, searchTeacher, img } =
    useContext(GeneralContext);

  return (
    <header className="shadow-md bg-white py-2 w-full">
      <div className="w-full justify-between items-center inline-flex px-4">
        {/* ---BRAND NAME--- */}
        <div>
          <Branch />
        </div>

        <div className="gap-5 w-full flex justify-end lg:48">
          {token && (
            // SEARCH BOX
            <div className="max-w-md w-full flex overflow-hidden rounded-md ">
              <input
                className="w-full h-full bg-gray-200 px-4 border-2 rounded-l-md hover:border-gray-400 focus:shadow-none focus:outline-none focus:border-green-500 focus:bg-transparent"
                type="text"
                name="search"
                id="search"
                placeholder="Buscar Profesor"
                value={searchTeacher}
                onChange={(e) => setSearchTeacher(e.target.value)}
              />
              <Link
                to={`/search/${searchTeacher}`}
                className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-300"
              >
                <SearchIcon className="h-5" />
              </Link>
            </div>
          )}
          <div className="flex items-center gap-5">
            {token ? (
              // PROFILE BUTTON
              <Link
                to="/my-profile"
                className="h-12 w-12 flex items-center justify-center rounded-full overflow-hidden hover:shadow-lg hover:border-gray-300"
              >
                {img ? (
                  <img alt="profile" src={img} />
                ) : (
                  <Avatar style={{ width: "100%", height: "100%" }} />
                )}
              </Link>
            ) : (
              <>
                <LinkButton value="Sign up" href="/signup" />
                <LinkButton value="Login" style="primary" href="/login" />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
