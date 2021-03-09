import React from 'react'

export default function Gif ({ url, title }) {
    return (
        <img src={url} alt={title} className="gifImage" />
    )
}