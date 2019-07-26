import {
  FETCH_POSTS,
  NEW_POST,
  FIND_POST,
  UPDATE_POST,
  DELETE_POST,
  RELOAD_POSTS
} from "./types";
import DB from "../database/DB.js";

export const fetchPosts = () => dispatch => {
  //dispatch is a resolver and a promise
  //   console.log("fetching");
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => dispatch({ type: FETCH_POSTS, payload: posts }));
  //   dispatch the data to the reducer

  //   DB.all().then(todos =>
  //     this.setState({
  //       todos
  //     })
  //   );
  DB.all().then(posts => dispatch({ type: FETCH_POSTS, payload: posts }));
};

export const createPost = postData => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(post => {
  //       console.log("posting");
  //       console.log(post);
  //       dispatch({ type: NEW_POST, payload: post });
  //     });
  //   console.log("creating post");
  //   console.log(postData);
  DB.create(postData.title).then(post =>
    dispatch({ type: NEW_POST, payload: post })
  );
};

export const findPost = postData => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(post => dispatch({ type: NEW_POST, payload: post }));
  DB.find(postData).then(post => dispatch({ type: FIND_POST, payload: post }));
};

export const updatePost = postData => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(post => dispatch({ type: NEW_POST, payload: post }));
  DB.update(postData).then(post =>
    dispatch({ type: UPDATE_POST, payload: post })
  );
};

export const deletePost = postData => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(post => dispatch({ type: NEW_POST, payload: post }));
  DB.delete(postData).then(post =>
    dispatch({ type: DELETE_POST, payload: post })
  );
};

export const reloadPosts = postData => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(post => dispatch({ type: NEW_POST, payload: post }));
  // console.log("postData");
  // console.log(postData);
  dispatch({ type: RELOAD_POSTS, payload: postData });
};
