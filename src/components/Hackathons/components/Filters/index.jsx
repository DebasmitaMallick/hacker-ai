import React from "react";
import SearchBar from "./components/SearchBar";
import FilterBtn from "./components/FilterBtn";
import AppliedFilters from "./components/AppliedFilters";
import SortByBtn from "../SortByBtn";

const Filters = () => {
  return (
    <div className="h-96 bg-darkBlue py-20 relative">
      <h1 className="text-2xl font-semibold text-white text-center">
        Explore Challenges
      </h1>
      <div className="py-8 text-center px-32">
        <div className="flex gap-8 justify-between">
          <SearchBar />
          <FilterBtn />
        </div>
        <AppliedFilters />
        <SortByBtn />
      </div>
    </div>
  );
};

export default Filters;
