import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Movie } from '~/types/movie';


interface MovieState {
    favouriteMovies: Movie[]
}

const initialState: MovieState = {
    favouriteMovies: [],
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        toggleFavouriteMovies: (state, action: PayloadAction<Movie>) => {
            const movie = action.payload;
            const index = state.favouriteMovies.findIndex(m => m.imdbID === movie.imdbID);
            if (index === -1) {
                state.favouriteMovies.push(movie);
            } else {
                state.favouriteMovies.splice(index, 1);
            }
        },
    },
})

export const { toggleFavouriteMovies } = movieSlice.actions

export default movieSlice.reducer