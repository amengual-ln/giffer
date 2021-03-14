import { useContext, useEffect, useState } from "react";
import fetchGifs from "../services/fetchGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      setLoading(true);
      fetchGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword, setGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNext(true);
      fetchGifs({ keyword, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNext(false);
      });
    },
    [keyword, page, setGifs]
  );
  return { loading, loadingNext, gifs, setPage };
}
