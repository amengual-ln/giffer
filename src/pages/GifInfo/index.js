import React from "react";
import { Redirect } from "wouter"
import useSingleGif from "../../hooks/useSingleGif";
import Gif from "../../components/Gif";
import Loading from "../../components/Loading";

export default function GifInfo({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if(isLoading) return <Loading />
  if(isError) return <Redirect to="/oops/404" />

  return <Gif {...gif} />;
}
