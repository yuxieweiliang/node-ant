/**
 * Created by xueyufei on 2018/11/15.
 */
import { call, put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import { postBook, getBooks, getBookById } from './server'
import { bookRootType, bookSubType } from './data'

const data = {
  author: 1, // 作者
  name: '书名', // 书名
  website: '首发网站', // 网站, # 首发网站
  introduction: null, // 简介
  title_message: null, // 扉页寄语
  type: null, // 类型, # 驻站， 签约， 未签约， 公众作品
  authorize: null, // 授权类型, # 独家，驻站
  edited_group: null, // 责编分组, # 仙侠编辑组，玄幻编辑组
  classify: null, // 分类
  subscribe: null, // 订阅
  tags: null, // 标签
  collection: null, // 收藏
  contribution_fee: null, // 稿费
  chapter_fee: null, // 章节费
  status: null, // 状态, # 连载中，已完结，断更。
  editor: null // [编辑], # 只有这里有的人，才可以编辑
}

// reducer
export default {
  namespace: 'book',
  state: Immutable({
    bookType: bookRootType,
    bookSubType: bookSubType[bookRootType[0].label],
    // 【新建】单本书
    newBook: {
      ...data,
      website: '中文网',
      classify: 20001,
      classifySub: 20002,
      type: '独家首发',
    },

    // 【详情】单本书
    book: {
      title: null,
    },

    // 【列表】书
    bookList: [],
  }),
  reducers: {
    new_book(state, action) {
      return state.meage({newBookLoading: true});
    },
    bookList(state, action) {
      return state.setIn(['bookList'], action.payload);
    },
    newBookChange(state, action) {
      return state.setIn(['newBook', action.payload.key], action.payload.data);
    },
    bookSubTypeChange(state, action) {
      const _bookSubType = bookSubType[action.payload];
      const newState = state.setIn(['bookSubType'], bookSubType[action.payload]);
      return newState.setIn(['newBook', 'classifySub'], _bookSubType[0].label);
    },
    classifySubChange(state, action) {
      return state.setIn(['newBook', 'classifySub'], action.payload);
    },

  },
  getBookType() {

  },
  getBookSubType() {

  },
  *createNewBook( { payLoad } ) {
    try {
      yield put({type: 'new_book', payload: false});
      const option = {
        website: payLoad.website,
        author: payLoad.author,
        name: payLoad.name,
        type: payLoad.type,
        classify: payLoad.classifySub,
        introduction: payLoad.introduction,
        title_message: payLoad.titleMessage,
        edited_group: payLoad.classify
      };

      const response = yield call(postBook, option);
      // yield put({type: RECEIVE_USERS, data: response.data}); BEGIN_POST_BOOKS
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getWorksByAuthorId( option ) {
    try {
      console.log('////////', option);
      // yield put({type: RECEIVE_USERS, data: response.data});
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *getBooksByAuthorId( option ) {
    try {
      // const works = yield call(getWorksByAuthorId, option);
      const result = yield call(getBookById);
      yield put({type: 'book/bookList', payload: result.data});
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  },
  *login() {
    try {
      const response = yield call(getBooks, url, {})
    } catch(e) {
      // yield put({type: FETCH_USERS_ERROR, data: e});
    }
  }
};
