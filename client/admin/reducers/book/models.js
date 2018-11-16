/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postBook, getBooks } from './server'
import book from '../../../api/book'
// LOGIN
export const POST_BOOKS = 'BOOKS: [ POST ]';
export const BEGIN_POST_BOOKS = 'BOOKS: [ POST ] -> BEGIN';
export const POST_BOOKS_ERROR = 'BOOKS: [ POST ] -> ERROR';
export const POST_BOOKS_SURE = 'BOOKS: [ POST ] -> SURE';
export const GET_BOOKS = 'BOOKS: [ GET ]';
export const BEGIN_GET_BOOKS = 'BOOKS: [ GET ] -> BEGIN';
export const GET_BOOKS_ERROR = 'BOOKS: [ GET ] -> ERROR';
export const GET_BOOKS_SURE = 'BOOKS: [ GET ] -> SURE';

// reducer
export default {
  state: Immutable({
    login: null,
    book: {},
    bookList: [],
  }),
  subscribe: {
    setupHistory() {
      console.log('book setupHistory');
    }
  },
  reducers: {
    beginLogin(state, action) {
      return state;
    },
  },
  *createNewBook( option ) {
    try {
      const response = yield call(postBook, option);
      console.log('////////', option);
      // yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *login() {
    try {
      const response = yield call(getBooks, url, {})
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  }
};
