import React, { useState, useEffect } from "react";

const Search = () => {
  const [Term, setTerm] = useState("");
  console.log("I Run with Every Render");
  useEffect(() => {
    console.log("I Run After Every render and it intial render");
  }, [Term]);
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
