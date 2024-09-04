import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from './hackathons.js';

const store = configureStore({
    reducer: {
        hackathons: hackathonReducer
    }
})

export default store