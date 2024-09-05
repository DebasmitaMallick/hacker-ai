import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div className="py-3 pl-4 font-bold">DPhi</div>
    </Link>
  );
};

export default Header;
