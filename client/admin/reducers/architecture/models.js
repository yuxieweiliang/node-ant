/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postArchitecture, getArchitectures, getArchitectureById } from './server'
import book from '../../../api/book'
// LOGIN
export const RECEIVE_LOADING = 'RECEIVE_LOADING';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
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

// reducer
export default {
  state: Immutable({
    login: null,
    book: {},
    bookList: [],
  }),
  reducers: {
    beginLogin(state, action) {
      return state;
    },
  },
  *createNewBook( option ) {
    try {
      const response = yield call(postArchitecture, option);
      console.log('////////', option);
      // yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *login() {
    try {
      const response = yield call(getArchitectures, url, {})
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  }
};
