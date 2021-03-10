import { useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'

export default function useGifs({ keyword }) {
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
    return { loading, gifs }
}