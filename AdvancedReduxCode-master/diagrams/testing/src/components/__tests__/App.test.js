import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div'); //fake div (it is not exist on any browser)
  ReactDOM.render(<App />, div);
  // looks inside the div and checks to see if the commentBox is in there
  expect(div.innerHTML).toContain('Box for Comment');
  // expect(div).toHaveAnInstanceOf('CommentBox');
  ReactDOM.unmountComponentAtNode(div);
});
