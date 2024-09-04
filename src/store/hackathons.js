import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    hackathons: []
}

const hackathonSlice = createSlice({
    name: "hackathons",
    initialState,
    reducers: {
        addItem(state, action) { 
            state.hackathons = [
                {
                    ...action.payload
                },
                ...state.hackathons
            ]
        },

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
    }
})

export default hackathonSlice.reducer

export const hackathonActions = hackathonSlice.actions;