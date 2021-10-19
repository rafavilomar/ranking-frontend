import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex">
	<div className="justify-start"> <h1 className="font-sans"> RANKING </h1> </div>
	<div className="justify-end">
	  <div></div>
	  <div>
	    <Link to="/" className="py-2 px-4 rounded-lg shadow-md bg-green-500 text-white"> Sign up </Link>
	  </div>
	</div>
      </div>
    </header>
  );
}

export default Header;
