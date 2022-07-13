import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [Term, setTerm] = useState("");

  useEffect(async () => {
    await axios("s");
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
