
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { searchMovies } from '~/api/'
import { useInfiniteQuery } from '@tanstack/react-query'
import { NavLink } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data,
  } = useInfiniteQuery({
    queryKey: [searchTerm],
    queryFn: searchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  })

  console.log(data);

  return <div className="w-full">

    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />

    {data?.pages.map((page) => page.movies.map((movie) => <NavLink to={`movie/${movie.imdbID}`}>{movie.Title}</NavLink>))}


  </div>;
}
