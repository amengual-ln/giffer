import React from 'react'
import GifList from '../../components/GifList'
import Loading from '../../components/Loading'
import useGifs from '../../hooks/useGifs'

export default function GifResults ({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
    {
        loading 
        ? <Loading /> 
        : <>
            <GifList gifs={gifs} />
            <br />
            <button onClick={handleNextPage}>Get more!</button>
        </>
    }
    </>
}