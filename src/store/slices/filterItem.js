import { createSlice } from '@reduxjs/toolkit'

export const filterItemSlice = createSlice({
    initialState: [],
    name: 'filterItem',
    reducers: {
        setFilterItem : (state, action) => action.payload
    }
})

export const { setFilterItem } = filterItemSlice.actions

export default filterItemSlice.reducer