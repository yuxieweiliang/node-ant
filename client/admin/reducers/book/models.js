/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postBook, getBooks, getBookById } from './server'

// reducer
export default {
  namespace: 'book',
  state: Immutable({
    // 【新建】单本书
    newBook: {},

    // 【详情】单本书
    book: {},

    // 【列表】书
    bookList: [],
  }),
  reducers: {
    new_book(state, action) {
      return state.meage({newBookLoading: true});
    },
  },
  *createNewBook( option ) {
    try {
      yield put({type: 'new_book', payload: false});
      const response = yield call(postBook, option);
      console.log('////////', option);
      // yield put({type: RECEIVE_USERS, data: response.data}); BEGIN_POST_BOOKS
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getBookById( option ) {
    try {
      const response = yield call(getBookById, option);
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
