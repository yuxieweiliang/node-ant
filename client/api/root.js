import config from '../config/config'
import { createApi } from '../utils'


/**
 * 公共api
 */
const _system = createApi(config.api, 'system');
const _user = createApi(config.api, 'user');
const _book = createApi(config.api, 'book');




export const system = {
  login: _system('login'),
  register: _system('register'),
  login2: _system('login2'),
  logout: _system('logout'),
};

export const user = {
  info: _user(),
  sorts: _user('sorts'), // 分类
  logout: _user('logout'),
};

export const book = {
  info: _book(),
  login: _book('login'),
  logout: _book('logout'),
};