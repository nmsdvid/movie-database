import axios from "axios";

interface Movie {
    Title: string
}

interface SearchMoviesParams {
    queryKey: string[];
    pageParam?: number;
}

interface SearchMoviesResults {
    movies: Movie[];
    nextPage: number | null
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
