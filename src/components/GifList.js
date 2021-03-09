import React, { useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'
import Gif from './Gif'

export default function GifList ({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function() {
        setLoading(true)
        fetchGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if(loading) return <h1>Fetching GIFs!</h1>

    return gifs.map(({url, title, id}) => 
        <Gif 
            url={url} 
            title={title} 
            key={id} />
    )
}