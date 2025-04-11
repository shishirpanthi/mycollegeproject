import * as api from '../api';
import {CREATE, DELETE, UPDATE, FETCH_ALL, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING,FETCH_BY_ID, COMMENT} from '../constants/actionTypes';

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING});
        const {data} = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: data});
        dispatch({ type : END_LOADING});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING})
        const {data} = await api.fetchPostsBySearch(searchQuery);
        
        dispatch({ type: FETCH_BY_SEARCH, payload: data});
        dispatch({ type : END_LOADING});

    } catch (error) {
        console.log(error);
    }
}

export const getPostById = (id) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING})
        const {data} = await api.fetchPostById(id);
        
        dispatch({ type: FETCH_BY_ID, payload: data});
        dispatch({ type : END_LOADING});

    } catch (error) {
        console.log(error);
    }
}


export const createPost = (post, history) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);

        dispatch({ type: CREATE, payload : data});
        history.push(`/posts/${data._id}`)
    } catch (error) {
        console.log('Error message : '+ error);
        
    }
}

export const updatePost = (postId, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(postId, post);
        dispatch({type : UPDATE, payload : data});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);
        dispatch({type : DELETE, payload: postId})
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const likePost = (postId) => async (dispatch) => {
    try {
        const {data} = await api.likePost(postId);
        dispatch({type : LIKE, payload : data});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const commentPost = (comment, postId) => async (dispatch) => {
    try {
        const {data} = await api.commentPost(comment, postId);
        dispatch({type : COMMENT, payload : data});
        return data.comments;
    } catch (error) {
        console.log('Error message : '+ error);
    }
}