import type { Route } from "./+types/movie";
import { getMovie } from '../api/index'
import {
  Container,
} from '@mui/material';
import { Wrapper } from "~/components/common/Wrapper";
import { Header } from "~/components/common/Header";
import { MovieDetailsCard } from '~/components/MovieDetailsCard';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return await getMovie({ id: params.id });
}

export default function Movie({
  loaderData,
}: Route.ComponentProps) {
  return (
    <Wrapper>
      <Header title="Movie Details" />
      <Container maxWidth="lg">
        <MovieDetailsCard movie={loaderData.movie} />
      </Container>
    </Wrapper>
  );
}