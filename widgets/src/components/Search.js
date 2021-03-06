import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [Term, setTerm] = useState("programming");
  const [deboundedTerm, setDeboundedTerm] = useState(Term);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboundedTerm(Term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [Term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: deboundedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [deboundedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
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
