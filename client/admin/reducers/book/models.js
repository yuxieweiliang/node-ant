/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postBook, getBooks, getBookById } from './server'
import { bookRootType, bookSubType } from './data'


// reducer
export default {
  namespace: 'book',
  state: Immutable({
    // 【新建】单本书
    newBook: {
      bookRootType,
      bookSubType: bookSubType[bookRootType[0].label],
      website: '中文网',
      name: null,
      classify: 20001,
      classifySub: 20002,
      type: '独家首发',
      introduction: null,
      titleMessage: null,
    },

    // 【详情】单本书
    book: {
      title: null,
    },

    // 【列表】书
    bookList: [],
  }),
  reducers: {
    new_book(state, action) {
      return state.meage({newBookLoading: true});
    },
    newBookChange(state, action) {
      return state.setIn(['newBook', action.payload.key], action.payload.data);
    },
    bookSubTypeChange(state, action) {
      const _bookSubType = bookSubType[action.payload];
      const newState = state.setIn(['newBook', 'bookSubType'], bookSubType[action.payload]);
      return newState.setIn(['newBook', 'classifySub'], _bookSubType[0].label);
    },
    classifySubChange(state, action) {
      return state.setIn(['newBook', 'classifySub'], action.payload);
    },

  },
  *createNewBook( { payLoad } ) {
    try {
      yield put({type: 'new_book', payload: false});
      const option = {
        website: payLoad.website,
        name: payLoad.name,
        type: payLoad.type,
        classify: payLoad.classify,
        classifySub: payLoad.classifySub,
        introduction: payLoad.introduction,
        title_message: payLoad.titleMessage,
      };

      const response = yield call(postBook, option);
      // yield put({type: RECEIVE_USERS, data: response.data}); BEGIN_POST_BOOKS
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getWorksByAuthorId( option ) {
    try {
      const response = yield call(getWorksByAuthorId, option);
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
