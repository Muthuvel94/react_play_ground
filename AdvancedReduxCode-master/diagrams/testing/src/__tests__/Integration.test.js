import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'reducers/Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});
it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchcomments' button and click it
  wrapped.find('.fetch_comments').simulate('click');
  // Expect to find a list of comments!
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
