/**
 * Created by xueyufei on 2018/11/15.
 */
import { login, logout } from './server'
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
// LOGIN
export const RECEIVE_LOADING = 'RECEIVE_LOADING';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CHANGE_INPUT = 'CHANGE_INPUT';

// reducer
export default {
  state: Immutable({
    index: 0,
    loading: false,
    login: false,
  }),
  subscribe: {
    setupHistory() {
      console.log('app setupHistory');
    }
  },
  reducers: {
    loading(state, action) {
      console.log('loading', state, action);
      return state.merge({index: state.index+1});
    },
    beginLogin(state, action) {
      return state;
    },
    [RECEIVE_LOADING](state, action) {
      return {...state, error: action.error};
    },
    [RECEIVE_USERS](state, action) {
      return {...state, error: action.error};
    },
    [CHANGE_INPUT](state, action) {
      return {...state, error: action.error};
    },
  },
  *loading(history, argument ) {
    console.log('////////', argument, history);
    // history('beginLogin', 'fffffff');
    try {
      const response = yield call(loading, 'https://jsonplaceholder.typicode.com/posts');
      yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *login() {
    console.log('lgoin');
    try {
      const response = yield call(login, url, {})
    } catch(e) {
      yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *logout() {
    console.log('lgoin');
    try {
      const response = yield call(logout, url, {})
    } catch(e) {
      yield put({type: FETCH_USERS_ERROR, data: e});
    }
  }
};
