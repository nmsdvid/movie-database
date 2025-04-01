import { useSelector } from "react-redux";
import type { RootState } from '~/store/store';
import {
    Container,
} from '@mui/material';
import { Wrapper } from "~/components/common/Wrapper";
import { Header } from "~/components/common/Header";
import { NoFavorite } from "~/components/NoFavorite";
import { Grid } from "~/components/common/Grid";
import { MovieItem } from "~/components/MovieItem";

export default function Favourites() {
    const favouriteMovies = useSelector((state: RootState) => state.movie.favouriteMovies);
    return (
        <Wrapper>
            <Header title="My Favourites" />
            <Container maxWidth="lg">
                {favouriteMovies.length === 0 ? (<NoFavorite title="No favorite movies yet" description="Add movies to your favorites by clicking the icon" />) : (
                    <Grid>
                        {favouriteMovies.map((movie) => <MovieItem movie={movie} showFavoriteIcon={true} />)}
                    </Grid>
                )}
            </Container>
        </Wrapper>
    );
}