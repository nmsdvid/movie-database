import { Box, IconButton, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router";
import type { Movie } from "~/types/movie";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/store/store";
import { toggleFavouriteMovies } from '~/store/features/movie';
const NETFLIX_RED = '#E50914';

interface MovieItemProp {
    movie: Movie
}

export const MovieItem = ({ movie }: MovieItemProp) => {
    const dispatch = useDispatch<AppDispatch>();
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
                        boxShadow: `0 0 20px ${NETFLIX_RED}40`,
                    }
                }}
            >
                <Box sx={{ position: 'relative', aspectRatio: '2/3' }}>
                    <Box
                        component="img"
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                        alt={movie.Title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <IconButton
                        onClick={(e) => dispatch(toggleFavouriteMovies(movie))}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: NETFLIX_RED,
                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.7)'
                            }
                        }}
                    >
                        <FavoriteIcon />
                    </IconButton>
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