import type { Route } from "./+types/movie";
import {getMovie} from '../api/index'
import { useDispatch } from "react-redux";
import {toggleFavouriteMovies} from '~/store/features/movie'

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return await getMovie({ id: params.id });
}

export default function Movie({
  loaderData,
}: Route.ComponentProps) {
  const dispach = useDispatch();
  const { Title } = loaderData.movie;
  return (
    <div>
      <h1>{Title}</h1>
      <button onClick={()=>dispach(toggleFavouriteMovies(loaderData.movie))}>Add To Fav</button>
    </div>
  );
}