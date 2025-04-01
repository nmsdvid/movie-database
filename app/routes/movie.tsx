import type { Route } from "./+types/movie";
import {getMovie} from '../api/index'

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return await getMovie({ id: params.id });
}

export default function Movie({
  loaderData,
}: Route.ComponentProps) {
  const { Title } = loaderData.movie;
  return (
    <div>
      <h1>{Title}</h1>
    </div>
  );
}