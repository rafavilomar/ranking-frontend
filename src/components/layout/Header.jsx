import React from "react";

import { SearchIcon } from "@heroicons/react/solid";

import LinkButton from "../buttons/LinkButton";
import Branch from "./Branch";

const Header = () => {
  return (
    <header className="shadow-md bg-white py-2">
      <div className="container justify-between items-center inline-flex px-4">
        {/*---BRAND NAME---*/}
        <div>
          <Branch />
        </div>

        <div className="gap-5 w-full flex justify-end lg:48">
          {/*--SEARCH BOX---*/}
          <div className="max-w-md border-gray-400 w-full flex overflow-hidden rounded-md border px-2">
            <div className="w-full h-full">
              <input
                className="w-full h-full border-none focus:shadow-none focus:outline-none px-2"
                type="text"
                name="search"
                id="search"
                placeholder="Buscar Profesor"
              />
            </div>
            <button className="flex items-center justify-center px-2 py-2 ">
              <SearchIcon className="h-5" />
            </button>
          </div>
          <div className="flex items-center gap-5">
            {/*--PROFILE BUTTON--*/}
            <button className="h-12 w-12 flex items-center justify-center rounded-full overflow-hidden hover:shadow-sm hover:border-gray-300">
              <img
                alt="none"
                className=""
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </button>
            {/*--ACTION BUTTONS--*/}
            <LinkButton value="Sign up" href="/signup" />
            <LinkButton value="Login" style="primary" href="/login" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
