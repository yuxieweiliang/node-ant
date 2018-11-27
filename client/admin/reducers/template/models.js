/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postTemplate, getTemplateList, getTemplate } from './server'
import { bookRootType, bookSubType } from './data'

// reducer
export default {
  namespace: 'template',
  state: Immutable({
    // 【新建】单本书
    newTemplate: {
      title: '中文网',
    },

    // 【详情】单本书
    template: {
      title: null,
    },

    // 【列表】书
    templateList: [],
  }),
  reducers: {
    push_ranking(state, action) {
      let array = Immutable(state.bookList);
      let mutableArray = Immutable.asMutable(array);
      mutableArray.push(action.payload);
      return state.setIn(['bookList'], mutableArray);
    },
  },
  *postTemplate( { payload } ) {
    let title = payload.title || "武器";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(postTemplate, { title, id: 1 });
      //  yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getTemplateList( { payload } ) {
    let id = payload.id || "1";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(getTemplateList, {params: { id }});
      yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getTemplate( { payload } ) {
    let archite_id = payload.id || "1";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(getTemplate, 1);
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },

};
