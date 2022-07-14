import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [Term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: Term,
        },
      });
    };
    search();
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
