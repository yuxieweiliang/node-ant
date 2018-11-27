/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postRanking, getRankingList } from './server'

// reducer
export default {
  namespace: 'ranking',
  state: Immutable({
    // 【新建】单本书
    newRanking: {
      title: '中文网',
    },

    // 【详情】单本书
    ranking: {
      title: null,
    },

    // 【列表】书
    rankingList: [],
  }),
  reducers: {
    push_ranking(state, action) { // Cannot convert undefined or null to object
      let array = Immutable(state.rankingList);
      let mutableArray = Immutable.asMutable(array);
      mutableArray.push(action.payload);
      return state.setIn(['bookList'], mutableArray);
    },
  },

  *postRanking( { payload } ) {
    let title = payload.title || "武器";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(postRanking, { title, archite_id: 1 });
      yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getRankingList( { payload } ) {
    let archite_id = payload.id || "1";
    try {
      // yield put({type: 'new_book', payload: false});
      const response = yield call(getRankingList, {params: { archite_id }});

      yield put({type: 'ranking/push_ranking', payload: response.data});
    } catch(e) {
      console.log(e);
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },

};
