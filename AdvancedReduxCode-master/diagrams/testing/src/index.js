import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'reducers/Root';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App.js';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
