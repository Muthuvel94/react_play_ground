import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'reducers/Root';
import App from 'components/App.js';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
