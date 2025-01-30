import React from "react";

const Search = (props) => {
  const { searchTerm, setSearchTerm } = props;
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search through thousands of movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
