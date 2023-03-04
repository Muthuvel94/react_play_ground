import React from 'react';

import { Link, Route } from 'react-router-dom';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import { connect } from 'react-redux';
import * as actions from 'actions';
class App extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.ChangeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.ChangeAuth(true)}>Sign IN</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
