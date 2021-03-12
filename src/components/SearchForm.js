import React, { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={keyword} />
    </form>
  );
}
