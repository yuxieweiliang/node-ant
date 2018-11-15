/**
 * Created by xueyufei on 2018/11/15.
 */
import { types } from './sagas'



// reducer
const initialState = {
  fetched: false,
  users: [{
    key: '1',
    name: '张三',
    email: 'zhangsan@126.com'
  }],
  posts: [{
    key: '1',
    id: '1',
    title: 'test'
  }],
  error: null
};



export default function (state = initialState, action){

  console.log(state, action);
  switch(action.type) {

    case [types.FETCH_USERS_ERROR]: {
      return {...state, error: action.error};
    }
    case [types.RECEIVE_USERS]: {
      return {...state, fetched: true, users: action.users};
    }
    case [types.FETCH_POSTS_ERROR]: {
      return {...state, error: action.error};
    }
    case [types.RECEIVE_POSTS]: {
      return {...state, fetched: true, posts: action.posts};
    }
  }
  return state;
};