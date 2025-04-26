import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading";



export const productSlice = createSlice({
    name: 'product',
    initialState: '',
    reducers:{
        setProduct: (state, action) => action.payload,
    }
})

export const {setProduct} = productSlice.actions


export const getAllProducts = () => async (dispatch) => {
    dispatch(setIsLoading(true))
    const URL = 'http://localhost:3000/api/v1/products'
    try {
    try {
      const res = await axios.get(URL);
      dispatch(setProduct(res.data.products));
      console.log('TERMINE EL THEN DE GET-ALLPRODUCTS');
    } catch (err) {
      return console.log(err);
    }
  } finally {
    return (dispatch(setIsLoading(false)));
  }
  }

export default productSlice.reducer