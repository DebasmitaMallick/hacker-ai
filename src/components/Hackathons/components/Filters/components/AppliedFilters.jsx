import React from "react";
import { useSelector } from "react-redux";
import FilterBadge from "./FilterBadge";

const AppliedFilters = () => {
  const statuses = useSelector((state) => state.filters.selectedStatuses);
  const levels = useSelector((state) => state.filters.selectedLevels);

  const filters = [...statuses, ...levels];

  return (
    <div id="applied-filters" className="flex gap-3 pt-11">
      {filters.map((filter) => (
        <FilterBadge key={filter} filter={filter} />
      ))}
    </div>
  );
};

export default AppliedFilters;
