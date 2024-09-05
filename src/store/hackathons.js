import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/cardimage/Group 1000002466.png";
import img2 from "../assets/cardimage/Group 1000002773.png";
import img3 from "../assets/cardimage/Group 1000002767.png";

const initialState = {
  hackathons: [
    {
      id: "0.3071462518664867jgiuguig",
      "challenge-name": "Data Science Bootcamp",
      "start-date-time": "2024-10-11T08:23",
      "end-date-time": "2024-11-11T08:23",
      description: "kihilhi",
      level: "Easy",
      image: img1,
      status: "Upcoming",
    },
    {
      id: "0.3071462518664867jg8768768",
      "challenge-name": "Java Bootcamp",
      "start-date-time": "2024-07-11T08:23",
      "end-date-time": "2024-08-11T08:23",
      description: "kihilhi",
      level: "Hard",
      image: img2,
      status: "Past",
    },
    {
      id: "0.3071462518664867jgiuvjhgjyy",
      "challenge-name": "React Bootcamp",
      "start-date-time": "2024-09-03T08:23",
      "end-date-time": "2024-09-11T08:23",
      description: "kihilhi",
      level: "Medium",
      image: img3,
      status: "Active",
    },
    {
      id: "0.ddddd664867jgiuguig",
      "challenge-name": "Java Bootcamp",
      "start-date-time": "2024-07-11T08:23",
      "end-date-time": "2024-08-11T08:23",
      description: "kihilhi",
      level: "Hard",
      image: img2,
      status: "Past",
    },
    {
      id: "0.aaaaa664867jgiuguig",
      "challenge-name": "React Bootcamp",
      "start-date-time": "2024-09-03T08:23",
      "end-date-time": "2024-09-11T08:23",
      description: "kihilhi",
      level: "Medium",
      image: img3,
      status: "Active",
    },
  ],
  statuses: ["Active", "Upcoming", "Past"],
  levels: ["Easy", "Medium", "Hard"]
};

const hackathonSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {
    addItem(state, action) {
      state.hackathons = [
        {
          ...action.payload,
        },
        ...state.hackathons,
      ];
    },
    editItem(state, action) {
      state.hackathons = state.hackathons.map(hackathon => hackathon.id === action.payload.id ? action.payload : hackathon)
    },
    deleteItem(state, action) {
      state.hackathons = state.hackathons.filter(hackathon => hackathon.id !== action.payload)
    }
  },
});

export default hackathonSlice.reducer;

export const hackathonActions = hackathonSlice.actions;
