import { combineReducers } from 'redux'
import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { app,  RECEIVE_LOADING } from './app/models'

export default {
  reducers: combineReducers({
    app: app.reducer
  }),
  rootSaga: function* () {
    yield all([
      // fork(() => takeLatest(RECEIVE_LOADING, showPostsAsync)),  // 可以始用fork
      takeLatest(RECEIVE_LOADING, app.loading), // 也可以直接始用
      // fork(watchGetBook),
    ]);
  }
}
