import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PostsIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path='posts/new' component={PostNew} />
    <Route path='posts/:id' component={PostShow} />
  </Route>
);
