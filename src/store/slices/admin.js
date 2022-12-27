import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name: 'admin',
    initialState: '',
    reducers:{
        setAdmin : (state, action) => action.payload
    }
})

export const { setAdmin } = adminSlice.actions

export default adminSlice.reducer