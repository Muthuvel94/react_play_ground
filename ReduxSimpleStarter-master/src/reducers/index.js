import { combineReducers } from 'redux';
import BookReducer from './reducers_book';
import ActiveBook from './reducers_active_book';
const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
