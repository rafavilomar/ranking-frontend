import React from "react";

import { SearchIcon } from "@heroicons/react/solid";

import LinkButton from "../buttons/LinkButton";

const Header = () => {
  return (
    <header className="shadow-md bg-white py-2">
      <div className="container justify-between items-center inline-flex px-4">
        {/*---BRAND NAME---*/}
        <div>
          <h1 className="font-sans font-bold text-2xl"> RANKING </h1>
        </div>

        <div className="gap-5 w-full flex justify-end lg:48">
          {/*--SEARCH BOX---*/}
          <div className="max-w-md border-gray-400 w-full flex overflow-hidden rounded-md border px-2">
            <div className="w-full h-full">
							<input className="w-full h-full  border-none focus:shadow-none focus:outline-none px-2" type="text" name="search" id="search" placeholder="Buscar Profesor" />
						</div>
            <button className="flex items-center justify-center px-2 py-2 ">
              <SearchIcon className="h-5" />
            </button>
          </div>
          <div className="flex items-center gap-5">
            {/*--PROFILE BUTTON--*/}
            <button className="rounded-full w-12 min-w-12">
              <img
								alt="none"
                className="rounded-full"
                src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann-414x414.jpeg"
              />
            </button>
            {/*--ACTION BUTTONS--*/}
						<LinkButton value="Sign up" />
						<LinkButton value="Login" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
