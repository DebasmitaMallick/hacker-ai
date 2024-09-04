import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../../../store/filters";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.filters.searchString);
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="w-3/4 py-3 px-6 rounded-xl text-xl max-h-[52px]"
      placeholder="Search"
      value={searchString}
      onChange={(e) =>
        dispatch(filterActions.searchStringSet(e.target.value))
      }
    />
  );
};

export default SearchBar;
