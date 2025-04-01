import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface MovieState {
    favouriteMovies: string[]
}

const initialState: MovieState = {
    favouriteMovies: [],
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        favouriteMovie: (state, action: PayloadAction<string>) => {
            const movieId = action.payload;
            state.favouriteMovies.push(movieId)
        },
    },
})

export const { favouriteMovie } = movieSlice.actions

export default movieSlice.reducer