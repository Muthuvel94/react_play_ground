import React, { useState } from "react";

const Search = () => {
  const [Term, setTerm] = useState("");
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          value={Term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        ></input>
      </div>
    </div>
  );
};

export default Search;
