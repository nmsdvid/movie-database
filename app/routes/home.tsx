
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { searchMovies } from '~/api/'
import { useInfiniteQuery } from '@tanstack/react-query'
import { NavLink } from "react-router";
import { useInView } from "react-intersection-observer";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const { ref, inView } = useInView();
  const {
    data,
    hasNextPage,
    fetchNextPage
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

  return <div className="w-full">

    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />

    {data?.pages.map((page) => page.movies.map((movie) => <NavLink to={`movie/${movie.imdbID}`}><div className="h-32">{movie.Title}</div> </NavLink>))}

    <div ref={ref} style={{height: 200}} />

  </div>;
}
