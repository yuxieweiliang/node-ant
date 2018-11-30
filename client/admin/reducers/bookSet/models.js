/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postBookSet, postBookSetValue, getBookSet, getBookSetList } from './server'

// reducer
export default {
  namespace: 'book_set',
  state: Immutable({
    // 【新建】单本书
    newBookSet: {
      title: '中文网',
    },

    // 【详情】单本书
    bookSet: {
      title: null,
    },

    // 【列表】书
    bookSetList: [],
  }),
  reducers: {
    push_ranking(state, action) {
      let array = Immutable(state.bookSetList);
      let mutableArray = Immutable.asMutable(array);
      mutableArray.push(action.payload);
      return state.setIn(['bookSetList'], mutableArray);
    },
  },
  *postBookSet( { payload } ) {
    let title = payload.title || "武器";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(postBookSet, { title, archite_id: 1 });
     //  yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *postBookSetValue( { payload } ) {
    const data = payload
      .template
      .map(({name, value}) => ({
        label: name,
        value: value,
        book_set_id: payload.book_set_id
      }));

    console.log('payload: ', data);
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(postBookSetValue, data);
     //  yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getBookSet( { payload } ) {
    let id = payload.id || "1";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(getBookSet, id);
      yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getBookSetList( { payload } ) {
    let id = payload.id || "1";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(getBookSetList, {params: { id }});
      yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },

};
