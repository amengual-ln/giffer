import React from 'react'
import { Link } from 'wouter'

export default function Gif ({ url, title, id }) {
    return (
        <Link to={`/gif/${id}`}>
            <img src={url} alt={title} className="gifImage" />
        </Link>
    )
}