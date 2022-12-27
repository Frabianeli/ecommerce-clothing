import { createSlice } from "@reduxjs/toolkit"


export const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    setSearch: (state, action) => action.payload,
    increment: (state) => state +1,
    decrement(state){
      state--
    },
    incrementByAmount: (state, action) => {
      state += action.payload
    },
  },
})

export const {setSearch, increment, decrement, incrementByAmount } = searchSlice.actions
export default searchSlice.reducer