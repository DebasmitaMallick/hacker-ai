import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../../../store/filters";
import { IoChevronUpOutline, IoChevronDownSharp } from "react-icons/io5";

const FilterBtn = () => {
  let STATUS_OPTIONS = useSelector((state) => state.hackathons.statuses);
  STATUS_OPTIONS = ["All", ...STATUS_OPTIONS];

  const LEVELS = useSelector((state) => state.hackathons.levels);

  const selectedStatuses = useSelector(
    (state) => state.filters.selectedStatuses
  );
  const selectedLevels = useSelector((state) => state.filters.selectedLevels);

  const [showFilters, setShowFilters] = useState(false);

  const dispatch = useDispatch();
  const handleStatusFilter = (e) => {
    const element = e.target;
    if (element.checked) {
      if (element.value === "All") {
        dispatch(filterActions.addAllStatus());
      } else {
        dispatch(filterActions.addStatus(element.value));
      }
    } else {
      if (element.value === "All") {
        dispatch(filterActions.removeAllStatus());
      } else {
        dispatch(filterActions.removeStatus(element.value));
      }
    }
  };

  const handleLevelFilter = (e) => {
    const element = e.target;
    if (element.checked) {
      dispatch(filterActions.addLevel(element.value));
    } else {
      dispatch(filterActions.removeLevel(element.value));
    }
  };

  const isChecked = (filterType, val) => {
    if (filterType === "Status") {
      return val !== "All"
        ? selectedStatuses.includes(val)
        : selectedStatuses.length === 3;
    } else {
      return selectedLevels.includes(val);
    }
  };

  const filters = [
    {
      name: "Status",
      options: STATUS_OPTIONS,
      actionHandler: handleStatusFilter,
    },
    {
      name: "Level",
      options: LEVELS,
      actionHandler: handleLevelFilter,
    },
  ];

  return (
    <div className="bg-white w-64 px-3 py-6 rounded-xl">
      <div className="flex justify-between">
        <div>Filter</div>
        <button onClick={() => setShowFilters((prev) => !prev)}>
          {showFilters ? <IoChevronUpOutline /> : <IoChevronDownSharp />}
        </button>
      </div>
      {showFilters && (
        <>
          <hr className="my-2" />
          {filters.map((filter) => (
            <Fragment key={filter.name}>
              <div className="text-left">
                <p>{filter.name}</p>
                <ul>
                  {filter.options.map((opt) => {
                    const name = opt.toLowerCase();
                    return (
                      <li key={opt}>
                        <input
                          type="checkbox"
                          name={name}
                          value={opt}
                          id={name}
                          className="mr-2"
                          onChange={filter.actionHandler}
                          checked={isChecked(filter.name, opt)}
                        />
                        <label htmlFor={name}>{opt}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {filter.name === "Status" && <hr className="my-2" />}
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default FilterBtn;
