import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class App extends Component {
  render() {
    return <div>React simple starter{this.props.children}</div>;
  }
}
