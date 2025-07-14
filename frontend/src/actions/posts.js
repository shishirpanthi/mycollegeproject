import * as api from "../api";
import {
  CREATE,
  DELETE,
  UPDATE,
  FETCH_ALL,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_BY_ID,
  COMMENT,
  FETCH_RECOMMENDATIONS,
  FETCH_SIMILAR_POSTS,
} from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error message : " + error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostById(id);

    dispatch({ type: FETCH_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log("Error message : " + error);
  }
};

export const updatePost = (postId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("Error message : " + error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({ type: DELETE, payload: postId });
  } catch (error) {
    console.log("Error message : " + error);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("Error message : " + error);
  }
};

export const commentPost = (comment, postId) => async (dispatch) => {
  try {
    const { data } = await api.commentPost(comment, postId);

    dispatch({ type: COMMENT, payload: data });
    return data.comments;
  } catch (error) {
    console.log("Error message : " + error);
  }
};

// Recommendation actions
export const getRecommendations =
  (limit = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchRecommendations(limit);

      dispatch({ type: FETCH_RECOMMENDATIONS, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log("Error fetching recommendations:", error);
      dispatch({ type: END_LOADING });
    }
  };

export const getSimilarPosts =
  (postId, limit = 5) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchSimilarPosts(postId, limit);

      dispatch({ type: FETCH_SIMILAR_POSTS, payload: data });
    } catch (error) {
      console.log("Error fetching similar posts:", error);
    }
  };

export const trackPostView = (postId) => async (dispatch) => {
  try {
    await api.trackPostView(postId);
  } catch (error) {
    console.log("Error tracking post view:", error);
  }
};
