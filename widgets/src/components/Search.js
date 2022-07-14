import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [Term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: Term,
        },
      });
      setResults(data.query.search);
    };
    if (Term) {
      search();
    }
  }, [Term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
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
      <div className="ui called list">{renderedResults}</div>
    </div>
  );
};

export default Search;
