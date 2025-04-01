import {
    Paper,
    Box,
    Typography,
    IconButton,
    Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import type { Movie } from '~/types/movie';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteMovies } from '~/store/features/movie';
import type { RootState } from '~/store/store';

interface MovieDetailsCardProps {
    movie: Movie;
}

export const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({ movie }) => {
    const dispatch = useDispatch();
    const { Poster, Title, Year, Runtime, Genre, Plot, Director, Actors, Released } = movie;
    const isFavourite = useSelector((state: RootState) => 
        state.movie.favouriteMovies.some((m: Movie) => m.imdbID === movie.imdbID)
    );

    return (
        <Paper 
            elevation={0}
            sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                overflow: 'hidden'
            }}
        >
            <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 2fr'
                }
            }}>
                <Box
                    component="img"
                    src={Poster !== 'N/A' ? Poster : 'https://placehold.co/300x450?text=No+Image'}
                    alt={Title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        aspectRatio: '2/3'
                    }}
                />
                <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            sx={{ 
                                color: 'white',
                                fontWeight: 'bold',
                                mr: 2
                            }}
                        >
                            {Title}
                        </Typography>
                        <IconButton 
                            onClick={() => dispatch(toggleFavouriteMovies(movie))}
                            sx={{ 
                                color: isFavourite ? 'primary.main' : 'white',
                                '&:hover': {
                                    color: 'primary.main'
                                }
                            }}
                        >
                            {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {Year}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {Runtime}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {Genre}
                        </Typography>
                    </Box>

                    <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', my: 3 }} />

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                            Plot
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {Plot}
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)'
                        },
                        gap: 2
                    }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
                                Director
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {Director}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
                                Cast
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {Actors}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
                                Release Date
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {Released}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
} 