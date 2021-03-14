import { useState, useEffect } from "react";
import useGifs from "./useGifs";
import fetchSingleGif from "../services/fetchSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(function () {
    // si no tengo el gif en cache, se lo pido a la api
    if (!gif) {
      fetchSingleGif({ id }).then((gif) => {
        setGif(gif);
      });
    }
  });

  return { gif };
}
