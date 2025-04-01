import type { Route } from "./+types/home";
import { useEffect, useMemo, useState } from "react";
import { searchMovies } from '~/api/'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from "react-intersection-observer";
import {
  Container,
  Box,
  Grid
} from '@mui/material';
import { Header } from "~/components/common/Header";
import { Wrapper } from "~/components/common/Wrapper";
import { MovieItem } from "~/components/MovieItem";
import { LoadingBar } from "~/components/common/Loading";
import { SearchInput } from "~/components/SearchInput";

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

  const results = useMemo(() => {
    return data?.pages?.flatMap((page) => page.movies) ?? [];
  }, [data]);

  return (
    <Wrapper>
      <Header title="Movie Finder" />
      <Container maxWidth="lg">

        <SearchInput onSearchTerm={setSearchTerm} />
        
        {isLoading ? (<LoadingBar />) : (<Grid container spacing={3}>
          {results.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.imdbID}>
              <MovieItem movie={movie} showFavoriteIcon={false} />
            </Grid>
          ))}
        </Grid>)}

        <Box ref={ref} sx={{ height: 100 }} />
      </Container>
    </Wrapper>
  );
}
