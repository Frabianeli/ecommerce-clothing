import { createSlice } from "@reduxjs/toolkit";


export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading : (state, action) => action.payload
    }
})

export const { setIsLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer