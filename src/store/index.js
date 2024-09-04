import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from './hackathons.js';
import filterReducer from "./filters.js"

const store = configureStore({
    reducer: {
        hackathons: hackathonReducer,
        filters: filterReducer
    }
})

export default store