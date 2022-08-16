import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>Enter the Search Text</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.onSearchTermChange(term);
  }
}

export default SearchBar;
