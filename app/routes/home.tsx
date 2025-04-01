
import type { Route } from "./+types/home";
import { useEffect } from "react";
import {searchMovies} from '~/api/'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  useEffect(()=>{
    searchMovies('batman', 1);
  },[]);

  return <div className="w-full"></div>;
}
