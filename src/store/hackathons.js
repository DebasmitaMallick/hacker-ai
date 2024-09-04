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
      id: "0.3071462518664867jgiuguig",
      "challenge-name": "Java Bootcamp",
      "start-date-time": "2024-07-11T08:23",
      "end-date-time": "2024-08-11T08:23",
      description: "kihilhi",
      level: "Hard",
      image: img2,
      status: "Past",
    },
    {
      id: "0.3071462518664867jgiuguig",
      "challenge-name": "React Bootcamp",
      "start-date-time": "2024-09-03T08:23",
      "end-date-time": "2024-09-11T08:23",
      description: "kihilhi",
      level: "Medium",
      image: img3,
      status: "Active",
    },
    {
      id: "0.3071462518664867jgiuguig",
      "challenge-name": "Java Bootcamp",
      "start-date-time": "2024-07-11T08:23",
      "end-date-time": "2024-08-11T08:23",
      description: "kihilhi",
      level: "Hard",
      image: img2,
      status: "Past",
    },
    {
      id: "0.3071462518664867jgiuguig",
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
    }

    // removeItem(state, action) {
    //     const existingItemIndex = state.items.findIndex(item => action.payload.title === item.title);
    //     const existingItem = state.items[existingItemIndex]
    //     if(existingItem.quantity > 1) {

    //         state.items[existingItemIndex] = {
    //             ...existingItem,
    //             quantity: existingItem.quantity - 1
    //         }
    //     } else {
    //         state.items =  state.items.filter(item => item.title !== action.payload.title);
    //     }
    // }
  },
});

export default hackathonSlice.reducer;

export const hackathonActions = hackathonSlice.actions;
