/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postArchitecture, getArchitectures, getArchitectureById } from './server'

// reducer
export default {
  namespace: 'architecture',
  state: Immutable({
    // 【新建】框架
    newArchitecture: {},

    // 【详情】框架
    architecture: {},

    // 【列表】框架
    architectureList: [],
  }),
  reducers: {
    beginLogin(state, action) {
      return state;
    },
  },
  *createNewBook( { payload } ) {
    let option = {
      name: payload.name,
      author: payload.author,
      type: payload.type,
      background: payload.background,
      editor: payload.editor,
    };
    try {
      yield put({type: 'app/loading', payload: true});
      const result = yield call(postArchitecture, option);
      yield put({type: 'app/loading', payload: false});
      // yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      yield put({type: 'app/loading', payload: false});
    }
  },
  *getArchitectures() {
    try {
      yield put({type: 'app/loading', payload: true});
      console.log('--------------getArchitectures')
      const response = yield call(getArchitectures);
      yield put({type: 'app/loading', payload: false});
    } catch(e) {
      yield put({type: 'app/loading', payload: false});
    }
  },
  *postArchitectures({ payload }) {
    console.log('--------------getArchitectures', payload)
    let option = {
      name: payload.name || '架构名称',
      author: payload.author || '作者',
      type: payload.type || '类型',
      background: payload.background || '背景',
      editor: payload.editor || '编辑',
    };
    try {
      yield put({type: 'app/loading', payload: true});
      const response = yield call(postArchitecture, option);
      yield put({type: 'app/loading', payload: false});
    } catch(e) {
      yield put({type: 'app/loading', payload: false});
    }
  }
};
