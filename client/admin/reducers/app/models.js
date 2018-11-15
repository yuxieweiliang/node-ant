/**
 * Created by xueyufei on 2018/11/15.
 */
import { loading } from './server'
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
// actions
export const RECEIVE_LOADING = 'RECEIVE_LOADING';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const RECEIVE_USERS = 'RECEIVE_USERS';

// reducer
const initialState = {
  fetched: false,
};

const appReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch(action.type) {
    case RECEIVE_LOADING: {
      return {...state, error: action.error};
    }
    case RECEIVE_USERS: {
      console.log(action);

      return {...state, error: action.error};
    }
  }
  return state;
};
export const app =  {
  reducer: appReducer,
  *loading() {
    try {
      const response = yield call(loading, 'https://jsonplaceholder.typicode.com/posts');
      yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      yield put({type: FETCH_USERS_ERROR, data: e});
    }
  }
};
