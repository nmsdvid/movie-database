import type { Route } from "./+types/movie";
import {getMovie} from '../api/index'
import { useDispatch } from "react-redux";
import {favouriteMovie} from '~/store/features/movie'

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return await getMovie({ id: params.id });
}

export default function Movie({
  loaderData,
}: Route.ComponentProps) {
  const dispach = useDispatch();
  const { Title, imdbID } = loaderData.movie;

  const handleAddToFavourite = (imdbID: string) => {
    dispach(favouriteMovie(imdbID));
  }

  return (
    <div>
      <h1>{Title}</h1>
      <button onClick={()=>handleAddToFavourite(imdbID)}>Add To Fav</button>
    </div>
  );
}