import { configureStore } from '@reduxjs/toolkit'
import search from './slices/search'
import product from './slices/products'
import cart from './slices/cart'
import isLoading from './slices/isLoading'
import admin from './slices/admin'

const store = configureStore({
    reducer: {
        search,
        product,
        cart,
        isLoading,
        admin
    }
})

export default store