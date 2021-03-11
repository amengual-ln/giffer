import React from 'react'
import { Link } from 'wouter'

export default function Gif ({ url, title, id }) {
    return (
        <Link to={`/gif/${id}`}>
            <img loading="lazy" src={url} alt={title} className="gifImage" />
        </Link>
    )
}