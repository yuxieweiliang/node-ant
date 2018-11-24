import { combineReducers } from 'redux'
import { all, fork, take, takeEvery, takeLatest } from 'redux-saga/effects';
import app from './app/models'
import book from './book/models'
import architecture from './architecture/models'

function createReducers(app) {
  const { namespace, state, reducers } = app;
  return (store = state, action) => {
    const [first, second] = action.type.split('/');
    return (
      (first === namespace && reducers[second])
        ? reducers[second](store, action)
        : store
    )
  };
}

/*function historyListen(history) {
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
}*/

export default {
  reducers: combineReducers({
    app: createReducers(app),
    book: createReducers(book),
    architecture: createReducers(architecture),
  }),
  rootSaga: function* (history) {
    // historyListen(history);
    yield all([
      takeLatest('app/LOGIN', app.login),
      takeLatest('app/LOGOUT', app.logout),
      takeLatest('app/REGISTER', app.register),
      takeLatest('book/POST_BOOKS', book.createNewBook),
      takeLatest('book/RECEIVE_BOOK_LIST', book.getWorksByAuthorId),
      takeLatest('architecture/RECEIVE_ARCHITECTURES', architecture.getArchitectures),
      // takeLatest('changeRoute', app.login, history),
      // fork(watchGetBook),
    ]);
  }
}
