import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { getConfig } from "../../utils/getConfig"
import { setIsLoading}  from "./isLoading"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        setCart: (state, action) => action.payload
    }
})

 export const {setCart} =  cartSlice.actions

export const getAllCart = (isLoading) => (dispatch) => {
    if(isLoading){
        dispatch(setIsLoading(true))
    }
    console.log(isLoading)
    const URL = 'https://ecommerce-rom.onrender.com/api/v1/cart/me'
    axios.get(URL, getConfig())
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err))
        .finally(() => isLoading && dispatch(setIsLoading(false)))
}

export default cartSlice.reducer
