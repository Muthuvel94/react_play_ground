import axios from "axios";
import JSONPlaceHolder from "../apis/JSONPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
