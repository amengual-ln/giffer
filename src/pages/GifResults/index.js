import React, { useRef, useEffect, useMemo } from "react";
import GifList from "../../components/GifList";
import Loading from "../../components/Loading";
import useGifs from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import throttle from "just-throttle"

export default function GifResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const throttleHandleNextPage = useMemo(() =>
    throttle(() => setPage((prevPage) => prevPage + 1), 200, true),
    [setPage]
  );
 
  useEffect(function () {
    if (isNearScreen) throttleHandleNextPage(); 
}, [throttleHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GifList gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
