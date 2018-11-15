/**
 * Created by xueyufei on 2018/11/15.
 */
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { postBook } from './server'
// actions types
export const types = {
  // POST BOOK
  POST_BOOKS: 'BOOKS: [ POST ]',
  BEGIN_POST_BOOKS: 'BOOKS: [ POST ] -> BEGIN',
  POST_BOOKS_ERROR: 'BOOKS: [ POST ] -> ERROR',
  POST_BOOKS_SURE: 'BOOKS: [ POST ] -> SURE',
  // GET BOOK
  GET_BOOKS: 'BOOKS: [ GET ]',
  BEGIN_GET_BOOKS: 'BOOKS: [ GET ] -> BOOKS',
  GET_BOOKS_ERROR: 'BOOKS: [ GET ] -> ERROR',
  GET_BOOKS_SURE: 'BOOKS: [ GET ] -> SURE',
};

function GET_POSTS() {

}
function* postNewBook() {
  const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
  yield put(GET_POSTS(response.data));
}
// action creators
export function newBook(users) {
  // console.log('newBook');
  // yield takeLatest(BEGIN_GET_POSTS, postNewBook);
  return { type: types.POST_BOOKS }
}

export function Begin_GET_POSTS() {

}
export function getBook(users) {
  // return { type: types.GET_BOOKS, users }
}
