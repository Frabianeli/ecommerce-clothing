import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


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

export const getProduct = (id) => (dispatch) => {
  const URL = `http://localhost:3000/api/v1/products${id}`
  return axios.get(URL)
    .then(res => dispatch(setSearch(res.data),
    console.log(res.data)))
    .catch(err => console.log(err))
}