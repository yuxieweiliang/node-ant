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
    newTemplate: null,

    // 【详情】单本书
    template: null,

    // 【列表】书
    templateList: null,
  }),
  reducers: {
    push_ranking(state, action) {
      // let array = Immutable(state.bookList);
      let mutableArray = Immutable.asMutable(state.bookList);
      mutableArray.push(action.payload);
      return state.setIn(['bookList'], mutableArray);
    },

    templateList(state, action) {
      return state.setIn(['templateList'], action.payload);
    },

    valueChange(state, action) {
      let templateData = Immutable.asMutable(state.template.template);
      let { value, index} = action.payload;
      templateData[index] = {...templateData[index], value};
      let newData = state.setIn(['newTemplate'], state.template)

      console.log('valueChange', templateData);

      return newData.setIn(['newTemplate', 'template'], templateData);
    },

    editRole(state, action) {
      return state.merge({
        template: action.payload
      });
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

      console.log('getTemplateList: ', response);
      yield put({type: 'template/templateList', payload: response.data.data});
      yield put({type: 'template/editRole', payload: response.data.data[0]});
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
