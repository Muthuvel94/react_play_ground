import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [Term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(Term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>video search</label>
          <input type="text" value={Term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
