import React from "react";
import SearchBar from "./components/SearchBar";
import FilterBtn from "./components/FilterBtn";

const Filters = () => {
  return (
    <div className="py-8 text-center">
      <div className="flex gap-2 justify-center">
        <SearchBar />
        <FilterBtn />
      </div>
    </div>
  );
};

export default Filters;
