import { combineReducers } from 'redux'
import { all, fork, take, takeEvery, takeLatest } from 'redux-saga/effects';
import app from './app/models'
import book from './book/models'
import architecture from './architecture/models'
import ranking from './ranking/models'
import bookSet from './bookSet/models'
import template from './template/models'

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

export default {
  reducers: combineReducers({
    app: createReducers(app),
    book: createReducers(book),
    architecture: createReducers(architecture),
    ranking: createReducers(ranking),
    bookSet: createReducers(bookSet),
    template: createReducers(template),
  }),
  rootSaga: function* (history) {
    yield all([
      takeLatest('app/LOGIN', app.login),
      takeLatest('app/LOGOUT', app.logout),
      takeLatest('app/REGISTER', app.register),

      takeLatest('book/POST_BOOKS', book.createNewBook),
      takeLatest('book/RECEIVE_BOOK_LIST', book.getBooksByAuthorId),

      takeLatest('architecture/RECEIVE_ARCHITECTURES', architecture.getArchitectures),
      takeLatest('architecture/POST_ARCHITECTURE', architecture.postArchitectures),

      takeLatest('ranking/POST_RANKING', ranking.postRanking),
      takeLatest('ranking/GET_RANKING_LIST', ranking.getRankingList),

      takeLatest('bookSet/GET_SETTING_LIST', bookSet.getBookSetList),
      takeLatest('bookSet/GET_TEMPLATE', bookSet.getBookSet),
      takeLatest('bookSet/POST_SETTING', bookSet.postBookSet),

      takeLatest('template/GET_TEMPLATE_LIST', template.getTemplateList),
      takeLatest('template/GET_TEMPLATE', template.getTemplate),
      takeLatest('template/POST_TEMPLATE', template.postTemplate),
      // takeLatest('changeRoute', app.login, history),
      // fork(watchGetBook),
    ]);
  }
}
