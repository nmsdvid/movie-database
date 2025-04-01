import type { Route } from "./+types/movie";
import {getMovie} from '../api/index'
import { useDispatch, useSelector } from "react-redux";
import {toggleFavouriteMovies} from '~/store/features/movie'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
  Divider,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import type { RootState } from '~/store/store';
import { Wrapper } from "~/components/common/Wrapper";
import { Header } from "~/components/common/Header";

const NETFLIX_RED = '#E50914';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return await getMovie({ id: params.id });
}

export default function Movie({
  loaderData,
}: Route.ComponentProps) {
  const dispatch = useDispatch();
  const { Title, Year, Released, Genre, Runtime, Director, Actors, Plot, Poster } = loaderData.movie;
  const favouriteMovies = useSelector((state: RootState) => state.movie.favouriteMovies);
  const isFavourite = favouriteMovies.some(movie => movie.imdbID === loaderData.movie.imdbID);

  return (
    <Wrapper>
      <Header title="Movie Details" />

      <Container maxWidth="lg">
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
              src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
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
                  onClick={() => dispatch(toggleFavouriteMovies(loaderData.movie))}
                  sx={{ 
                    color: isFavourite ? NETFLIX_RED : 'white',
                    '&:hover': {
                      color: NETFLIX_RED
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
      </Container>
    </Wrapper>
  );
}