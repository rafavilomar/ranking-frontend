import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Branch = () => (
  <Link to="/">
    <h1 className="sm:inline hidden font-sans font-bold text-2xl"> RANKING </h1>
    <h1 className="sm:hidden font-sans font-bold text-2xl"> R </h1>
  </Link>
);
export default Branch;
