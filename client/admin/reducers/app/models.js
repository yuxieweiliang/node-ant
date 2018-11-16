/**
 * Created by xueyufei on 2018/11/15.
 */
import { login, logout } from './server'
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';

// reducer
export default {
  namespace: 'app',
  state: Immutable({
    /**
     * 页面是否显示加载
     * false: 不显示
     * true:  显示
     */
    loading: false,
    /**
     * 用户是否已经登录
     * false: 未登录
     * true:  已登录
     */
    login: false,
  }),
  reducers: {
    loading(state, action) {
      console.log(action.payload);
      return state.merge({loading: action.payload});
    },
  },
  *login() {
    try {
      yield put({type: 'app/loading', payload: true});
      const response = yield call(login, url, {});
      yield put({type: 'app/loading', payload: false});
    } catch(e) {
      yield put({type: 'app/loading', payload: false});
    }
  },
  *logout() {
    try {
      yield put({type: 'app/loading', payload: true});
      const response = yield call(logout, url, {});
      yield put({type: 'app/loading', payload: false});
    } catch(e) {
      yield put({type: 'app/loading', payload: false});
    }
  }
};
