import { configureStore } from '@reduxjs/toolkit'
import search from './slices/search'

const store = configureStore({
    reducer: {
        search
    }
})

export default store