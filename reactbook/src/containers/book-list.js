import React from "react";
import { connect } from "react-redux";
import { SelectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class bookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.SelectBook()}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SelectBook: SelectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(bookList);
