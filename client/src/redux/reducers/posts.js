import { create } from "@mui/material/styles/createTransitions";
import { INIT_STATE } from "../../constant";
import { createPost, getPosts, getType, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch(action.type) {
        case getType(getPosts.getPostsRequest): // case 'getPostsRequest
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostSuccess): // case 'getPostsSuccess'
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getPosts.getPostFailure): // case 'getPostsError'
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case getType(updatePost.updatePostSuccess):
            return {
                ...state,
                data: state.data.map(post => post._id === action.payload._id ? action.payload : post),
            }
        default:
            return state;
    }
}