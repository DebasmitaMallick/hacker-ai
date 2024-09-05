import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { filterActions } from "../../../../../store/filters";
import { useDispatch, useSelector } from "react-redux";

const FilterBadge = ({ filter }) => {
  const dispatch = useDispatch();
  const selectedStatuses = useSelector((state) => state.filters.selectedStatuses)

  const handleRemoveFilter = () => {
    if(selectedStatuses.includes(filter)) {
        dispatch(filterActions.removeStatus(filter))
    }
    else {
        dispatch(filterActions.removeLevel(filter))
    }
  }

  return (
    <div className="flex px-5 py-2 min-w-36 rounded-3xl text-white bg-white bg-opacity-40 items-center justify-between">
      <div className="text-lg">{filter}</div>
      <button onClick={handleRemoveFilter}>
        <IoCloseCircle />
      </button>
    </div>
  );
};

export default FilterBadge;
