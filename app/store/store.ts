

import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './features/movie'

const store = configureStore({
    reducer: {
        movie: movieSlice.reducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch