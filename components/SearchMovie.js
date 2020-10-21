import React from "react";

function SearchMovie() {
  return (
    <div>
      <label>Title</label>
      <input type="text" />
      <label>Year</label>
      <input type="text" />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchMovie;
