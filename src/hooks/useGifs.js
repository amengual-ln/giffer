import { useContext, useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs({ keyword }) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function() {
        setLoading(true)
        fetchGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword, setGifs])
    return { loading, gifs }
}