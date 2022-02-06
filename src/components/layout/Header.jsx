import React, { useContext, useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";

import LinkButton from "../buttons/LinkButton";
import Branch from "./Branch";
import { Link } from "react-router-dom";
import GeneralContext from "../../context/context";

const Header = () => {

  const { token } = useContext(GeneralContext);
  const [teacherName, setTeacherName] = useState("");

  return (
    <header className="shadow-md bg-white py-2 w-full">
      <div className="w-full justify-between items-center inline-flex px-4">
        {/*---BRAND NAME---*/}
        <div>
          <Link to="/">
            <Branch />
          </Link>
        </div>

        <div className="gap-5 w-full flex justify-end lg:48">
          {token && (
            // SEARCH BOX
            <div className="max-w-md border-gray-400 w-full flex overflow-hidden rounded-md border">
              <div className="w-full h-full">
                <input
                  className="w-full h-full border-none focus:shadow-none focus:outline-none px-4"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Buscar Profesor"
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
              <Link to={`/search/${teacherName}`} className="flex items-center justify-center px-4 py-2 hover:bg-gray-200">
                <SearchIcon className="h-5" />
              </Link>
            </div>
          )}
          <div className="flex items-center gap-5">
            {token ? (
              // PROFILE BUTTON
              <Link to="/my-profile" className="h-12 w-12 flex items-center justify-center rounded-full overflow-hidden hover:shadow-sm hover:border-gray-300" >
                <img
                  alt="profile picture"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Link>
            ) : (<>
              <LinkButton value="Sign up" href="/signup" />
              <LinkButton value="Login" style="primary" href="/login" />
            </>)}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
