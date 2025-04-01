import axios from "axios";

export const searchMovies = async (searchTerm: string, pageParam: number) => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL, {
        params: {
            s: searchTerm,
            apikey: import.meta.env.VITE_API_KEY,
            page: pageParam,
        },
    });

    console.log(response)
}