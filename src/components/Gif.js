import React from "react";
import { Link } from "wouter";

function Gif({ url, title, id }) {
  return (
    <Link to={`/gif/${id}`}>
      <img loading="lazy" src={url} alt={title} className="gifImage" />
    </Link>
  );
}

export default React.memo(Gif);
