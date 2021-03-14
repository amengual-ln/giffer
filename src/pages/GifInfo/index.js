import React from "react";
import useSingleGif from "../../hooks/useSingleGif";
import Gif from "../../components/Gif";

export default function GifInfo({ params }) {
  const { gif } = useSingleGif({ id: params.id });

  return <Gif {...gif} />;
}
