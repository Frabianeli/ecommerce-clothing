import { configureStore } from '@reduxjs/toolkit'
import search from './slices/search'
import product from './slices/products'
import cart from './slices/cart'
import isLoading from './slices/isLoading'
import admin from './slices/admin'
import filterItem from './slices/filterItem'

const store = configureStore({
    reducer: {
        search,
        product,
        cart,
        isLoading,
        admin,
        filterItem
    }
})

export default store