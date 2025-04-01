
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from '~/store/store';

export default function Favourites() {
    const dispatch = useDispatch<AppDispatch>();
    const favouriteMovies = useSelector((state: RootState) => state.movie.favouriteMovies);

    return (
        <div>
            {favouriteMovies.map((movie) => (
                <h1 key={movie.imdbID}>{movie.Title}</h1>
            ))}
        </div>
    );
}