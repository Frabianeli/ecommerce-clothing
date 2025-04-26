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
        console.log('SLICE-LOADING')
        dispatch(setIsLoading(true))
    }
    const URL = 'http://localhost:3000/api/v1/cart/me'
    return axios.get(URL, getConfig())
        .then(res =>{
            console.log('THEN AXIOS')
            dispatch(setCart(res.data))
        })
        .catch(err => console.log(err))
        .finally(() => isLoading && dispatch(setIsLoading(false)))

}

export default cartSlice.reducer
