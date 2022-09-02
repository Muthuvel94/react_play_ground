import { combineReducers } from "redux";
import { BookReducer } from "./reducers_book";

const rootReducer = combineReducers({
  books: BookReducer,
});

export default rootReducer;
