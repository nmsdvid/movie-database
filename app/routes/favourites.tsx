import { useSelector } from "react-redux";
import type { RootState } from '~/store/store';
import {
    Container,
    Grid,
} from '@mui/material';
import { Wrapper } from "~/components/common/Wrapper";
import { Header } from "~/components/common/Header";
import { NoFavorite } from "~/components/NoFavorite";
import { MovieItem } from "~/components/MovieItem";

export default function Favourites() {
    const favouriteMovies = useSelector((state: RootState) => state.movie.favouriteMovies);
    return (
        <Wrapper>
            <Header title="My Favourites" />
            <Container maxWidth="lg">
                {favouriteMovies.length === 0 ? (<NoFavorite title="No favorite movies yet" description="Add movies to your favorites by clicking the icon" />) : (
                    <Grid container spacing={3}>
                        {favouriteMovies.map((movie) => <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.imdbID}>
                            <MovieItem movie={movie} showFavoriteIcon={true} />
                        </Grid>)}
                    </Grid>
                )}
            </Container>
        </Wrapper>
    );
}