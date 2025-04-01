import type { Route } from "./+types/home";
import { useEffect, useMemo, useState } from "react";
import { searchMovies } from '~/api/'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from "react-intersection-observer";
import { 
  Container, 
  TextField, 
  Box,
  InputAdornment,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Header } from "~/components/common/Header";
import { Wrapper } from "~/components/common/Wrapper";
import { Grid } from "~/components/common/Grid";
import { MovieItem } from "~/components/MovieItem";
import { LoadingBar } from "~/components/common/Loading";
import { useSelector } from "react-redux";
import type { RootState } from "~/store/store";

const NETFLIX_RED = '#E50914';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Movie Finder" },
    { name: "description", content: "Search and discover movies" },
  ];
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { ref, inView } = useInView();
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: [searchTerm],
    queryFn: searchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  const results = useMemo(()=>{
    return data?.pages?.flatMap((page) => page.movies) ?? [];
  },[data]);

  return (
    <Wrapper>
      <Header title="Movie Finder" />
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            mb: 6
          }}
        >
          <TextField
            size="medium"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              width: '100%',
              maxWidth: 600,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: NETFLIX_RED,
                },
                '&.Mui-focused fieldset': {
                  borderColor: NETFLIX_RED,
                },
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
                fontSize: '1.1rem',
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: NETFLIX_RED }} />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: NETFLIX_RED,
                      '&:hover': {
                        bgcolor: '#B1060F',
                      }
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {isLoading ? (<LoadingBar />) : (
          <Grid>
          {results.map((movie) => <MovieItem movie={movie} showFavoriteIcon={false} />)}
          </Grid>
        )}



        <Box ref={ref} sx={{ height: 100 }} />
      </Container>
    
    </Wrapper>
  );
}
