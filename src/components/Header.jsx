import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex gap-10 p-10 text-white">
      <Link
        to="/"
        className="p-3 bg-fuchsia-700 hover:bg-fuchsia-900 cursor-pointer rounded-md"
      >
        Home
      </Link>
      <Link
        to="/redux-toolkit"
        className="p-3 bg-fuchsia-700 hover:bg-fuchsia-900 cursor-pointer rounded-md"
      >
        Redux
      </Link>
      <Link
        to="/zustand"
        className="p-3 bg-fuchsia-700 hover:bg-fuchsia-900 cursor-pointer rounded-md"
      >
        Zustand
      </Link>
    </div>
  );
};

export default Header;
