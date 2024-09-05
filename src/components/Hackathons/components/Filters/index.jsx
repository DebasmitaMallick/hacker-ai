import React from "react";
import SearchBar from "./components/SearchBar";
import FilterBtn from "./components/FilterBtn";
import AppliedFilters from "./components/AppliedFilters";

const Filters = () => {
  return (
    <div className="h-72 bg-darkBlue">
      <h1 className="text-2xl font-semibold text-white text-center">
        Explore Challenges
      </h1>
      <div className="py-8 text-center px-32">
        <div className="flex gap-8 justify-between">
          <SearchBar />
          <FilterBtn />
        </div>
        <AppliedFilters />
      </div>
    </div>
  );
};

export default Filters;
