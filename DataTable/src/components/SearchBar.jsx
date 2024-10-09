import React from "react";

const SearchBar = ({ query, setQuery, minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by name, course, or age" value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <input type="date" placeholder="Min Date" value={minDate}
                onChange={(e) => setMinDate(e.target.value)}
            />
            <input type="date" placeholder="Max Date" value={maxDate}
                onChange={(e) => setMaxDate(e.target.value)}
            />
        </div>
    </div>
  );
};

export default SearchBar;
