import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('savecomment', () => {
  it('it has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('it has the correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.type).toEqual('New Comment');
  });
});
