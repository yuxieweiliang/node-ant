/*
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { BEGIN_GET_POSTS, GET_POSTS, GET_POSTS_ERROR } from '../reducers/app';
import { types } from '../reducers/book/sagas';

// worker saga
function* showPostsAsync(action) {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
        yield put(GET_POSTS(response.data));
    } catch(e) {
        yield put(GET_ERROR(e));
    }
}
// worker saga
function* showBooksAsync(action) {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
        yield put(GET_POSTS(response.data));
    } catch(e) {
        yield put(GET_ERROR(e));
    }
}

// wacther saga
function* watchGetPosts() {
    yield takeLatest(BEGIN_GET_POSTS, showPostsAsync);
}

// wacther saga
function* watchGetBook() {
    yield takeLatest(types.POST_BOOKS, showBooksAsync);
}

// root saga
export default function* rootSaga() {
  console.log(window.location);
    yield all([
      fork(watchGetPosts),
      fork(watchGetBook),
    ]);
}*/
