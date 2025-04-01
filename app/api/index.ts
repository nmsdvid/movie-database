import axios from "axios";

interface Movie {
    Title: string
    imdbID: string
}

interface SearchMoviesParams {
    queryKey: string[];
    pageParam?: number;
}

interface SearchMoviesResults {
    movies: Movie[];
    nextPage: number | null
}

interface GetMovieParam {
    id: string;
}

interface GetMovieResult {
    movie: Movie;
}

export const searchMovies = async ({ queryKey, pageParam = 1 }: SearchMoviesParams): Promise<SearchMoviesResults> => {
    const [searchTerm] = queryKey;
    const response = await axios.get(import.meta.env.VITE_BASE_URL, {
        params: {
            s: searchTerm,
            apikey: import.meta.env.VITE_API_KEY,
            page: pageParam,
        },
    });
    return {
        movies: response.data.Search || [],
        nextPage: response.data.Search ? pageParam + 1 : null,
    };
}

export const getMovie = async ({ id }: GetMovieParam): Promise<GetMovieResult> => {
    const response = await axios.get<Movie>(import.meta.env.VITE_BASE_URL, {
      params: {
        i: id,
        apikey: import.meta.env.VITE_API_KEY,
      },
    });
    return { movie: response.data };
  };