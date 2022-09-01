import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreaters } from 'redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>List of blog posts</div>;
  }
}
//
//   function mapDispatchToProps(dispatch) {
// return bindActionCreaters({ fetchPosts }, dispatch);
// }

export default connect(null, { fetchPosts })(PostIndex);
