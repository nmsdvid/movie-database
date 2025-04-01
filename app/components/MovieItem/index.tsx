import { Box, IconButton, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router";
import type { Movie } from "~/types/movie";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store/store";
import { toggleFavouriteMovies } from '~/store/features/movie';

interface MovieItemProp {
    movie: Movie,
    showFavoriteIcon?: boolean
}

export const MovieItem = ({ movie, showFavoriteIcon = false }: MovieItemProp) => {
    const dispatch = useDispatch<AppDispatch>();
    const favouriteMovies = useSelector((state: RootState) => state.movie.favouriteMovies);
    const isFavourite = favouriteMovies.some(m => m.imdbID === movie.imdbID);

    return (
        <NavLink
            key={movie.imdbID}
            to={`/movie/${movie.imdbID}`}
            style={{ textDecoration: 'none' }}
        >
            <Paper
                elevation={0}
                sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: `0 0 20px primary.main 40`,
                    }
                }}
            >
                <Box sx={{ position: 'relative', aspectRatio: '2/3' }}>
                    <Box
                        component="img"
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450?text=No+Image'}
                        alt={movie.Title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    {showFavoriteIcon && (
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(toggleFavouriteMovies(movie));
                            }}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                color: isFavourite ? 'primary.main' : 'rgba(255, 255, 255, 0.7)',
                                bgcolor: 'rgba(0, 0, 0, 0.5)',
                                '&:hover': {
                                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                                    color: 'primary.main'
                                }
                            }}
                        >
                            {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    )}
                </Box>
                <Box sx={{ p: 2 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        noWrap
                        sx={{
                            color: 'white',
                            fontSize: '1rem',
                            mb: 0.5
                        }}
                    >
                        {movie.Title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '0.875rem'
                        }}
                    >
                        {movie.Year}
                    </Typography>
                </Box>
            </Paper>
        </NavLink>
    )
}