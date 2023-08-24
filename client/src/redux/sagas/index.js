import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

// call() muon thuc thi 1 func, 1 fucn la 1 promise, duoc solve xong thi moi xong
function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostFailure(err));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        console.log('[createPostSaga - posts]', post);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createPost.createPostFailure(err));
    }
}

function* updatePostSaga(action) {
    try {
        const updatedPost = yield call(api.updatePost, action.payload);
        console.log('[updatePostSaga - posts]', updatedPost);
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updatePost.updatePostFailure(err));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest , fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest , createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest , updatePostSaga);
}

// generator function ES6

export default mySaga;