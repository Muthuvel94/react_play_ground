import { combineReducers } from 'redux';
import PostReducer from '../reducers/reducer_post';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer,
});

export default rootReducer;
