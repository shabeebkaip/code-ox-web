import { createSlice } from "@reduxjs/toolkit";

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        selectedData: {},
        isAuthenticated: false
    },
    reducers: {
        setSelectedData: (state, action) => {
            state.selectedData = action.payload
        },
    }
})

export const { setSelectedData } = sharedSlice.actions;

export default sharedSlice.reducer;