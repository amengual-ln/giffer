import React from 'react'
import GifList from '../../components/GifList'
import Loading from '../../components/Loading'
import useGifs from '../../hooks/useGifs'

export default function GifResults ({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
    {
        loading ? <Loading /> : <GifList gifs={gifs} />
    }
    </>
}