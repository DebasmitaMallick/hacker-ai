import React from "react";
import { GoSortDesc, GoSortAsc } from "react-icons/go";
import { filterActions } from "../../../../store/filters";
import { useDispatch, useSelector } from "react-redux";

const SortByBtn = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.filters.sortOrder);

  const handleSortOrder = () => {
    let newOrder;
    if (sortOrder === "" || sortOrder === "oldToNew") {
      newOrder = "newToOld";
    } else {
      newOrder = "oldToNew";
    }
    dispatch(filterActions.sortOrderSet(newOrder));
  };

  return (
    <div>
      <button
        id="sort-by-btn"
        className=" bg-white w-24 h-10 rounded-md text-center"
        onClick={handleSortOrder}
      >
        {sortOrder === "" ? (
          "Sort"
        ) : sortOrder === "newToOld" ? (
          <GoSortDesc className="m-auto text-xl" />
        ) : (
          <GoSortAsc className="m-auto text-xl" />
        )}
      </button>
      <p className="text-white">{sortOrder}</p>
    </div>
  );
};

export default SortByBtn;
