import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
  selectedStatuses: [],
  selectedLevels: [],
  sortOrder: ""
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchStringSet(state, action) {
      state.searchString = action.payload;
    },
    addStatus(state, action) {
        if(!state.selectedStatuses.includes(action.payload)) {
            state.selectedStatuses = [
                ...state.selectedStatuses,
                action.payload
            ]
        }
    },
    addAllStatus(state) {
        state.selectedStatuses = ["Active", "Upcoming", "Past"]
    },
    removeAllStatus(state) {
        state.selectedStatuses = []
    },
    removeStatus(state, action) {
        state.selectedStatuses = state.selectedStatuses.filter(status => status !== action.payload)
    },
    addLevel(state, action) {
        state.selectedLevels = [
            ...state.selectedLevels,
            action.payload
        ]
    },
    removeLevel(state, action) {
        state.selectedLevels = state.selectedLevels.filter(level => level !== action.payload)
    },
    sortOrderSet(state, action) {
        state.sortOrder = action.payload
    }
  },
});

export default filterSlice.reducer;

export const filterActions = filterSlice.actions;