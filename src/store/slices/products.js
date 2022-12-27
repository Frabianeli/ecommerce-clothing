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


export const getAllProducts = () => (dispatch) => {
    dispatch(setIsLoading(true))
    const URL = 'https://ecommerce-rom.onrender.com/api/v1/products'
    return axios.get(URL)
      .then(res => dispatch(setProduct(res.data.products)))
      .catch(err => console.log(err))
      .finally(() => dispatch(setIsLoading(false)))
  }

export default productSlice.reducer