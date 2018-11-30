/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function postBookSet(data) {
  console.log('////////', data);
  return axios.post('bookSet/new', data)
}

/**
 * 书设定 - 具体值
 * @param data
 * @returns {Promise<T>}
 */
export function postBookSetValue(data) {
  console.log('////////', data);
  return axios.post('bookSet/value', data)
}

/**
 * 新建排行榜
 * @param id
 * @returns {Promise<T>}
 */
export function getBookSet(id) {
  console.log('////////', id);
  return axios.get(`bookSet/${ id }`)
}


/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function getBookSetList(data) {
  console.log('////////', data);
  return axios.get('bookSet', data)
}
