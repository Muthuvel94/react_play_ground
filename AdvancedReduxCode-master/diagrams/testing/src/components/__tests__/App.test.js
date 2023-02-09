import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
  /*  const div = document.createElement('div'); //fake div (it is not exist on any browser)
  ReactDOM.render(<App />, div);
  // looks inside the div and checks to see if the commentBox is in there
  expect(div.innerHTML).toContain('Box for Comment');
  // expect(div).toHaveAnInstanceOf('CommentBox');
  ReactDOM.unmountComponentAtNode(div); */
});

it('shows a comment list', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
