import { useState, useEffect } from "react";
import useGifs from "./useGifs";
import fetchSingleGif from "../services/fetchSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(function () {
    // si no tengo el gif en cache, se lo pido a la api
    if (!gif) {
      setLoading(true);
      fetchSingleGif({ id }).then((gif) => {
        setGif(gif);
        setLoading(false);
      }).catch( err => {
        setLoading(false);
        setError(true)
      });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
