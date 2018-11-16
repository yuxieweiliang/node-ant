import { combineReducers } from 'redux'
import { all, fork, take, takeEvery, takeLatest } from 'redux-saga/effects';
import app from './app/models'
import book, { POST_BOOKS, GET_BOOKS } from './book/models'

function createReducers(app) {
  const { state, reducers } = app;
  return (store = state, action) => (
    reducers[action.type]
      ? reducers[action.type](store, action)
      : store
  );
}

function historyListen(history) {
  history.listen(function(route) {
    if(route.pathname === '/') {
      let sub = app.subscribe;
      if(sub) {
        for (let key in sub) {
          sub[key]()
        }
      }
    }
    else if(route.pathname === '/book') {}
    else  if(route.pathname === '/architecture') {}
  });
}

export default {
  reducers: combineReducers({
    app: createReducers(app),
    book: createReducers(book),
  }),
  rootSaga: function* (history) {
    historyListen(history);
    yield all([
      // takeLatest('RECEIVE_LOADING', app.loading),
      // takeLatest('RECEIVE_LOADING', app.login),
      takeLatest(POST_BOOKS, book.createNewBook),
      takeLatest(GET_BOOKS, book.getBookById),
      // takeLatest('changeRoute', app.login, history),
      // fork(watchGetBook),
    ]);
  }
}
