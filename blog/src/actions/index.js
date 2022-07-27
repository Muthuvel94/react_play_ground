import JSONPlaceHolder from "../apis/JSONPlaceHolder";

export const fetchPosts = () => {
  return function (dispatch, getState) {
    const promise = JSONPlaceHolder.get("/posts");
    return {
      type: "FETCH_POSTS",
      payload: promise,
    };
  };
};
