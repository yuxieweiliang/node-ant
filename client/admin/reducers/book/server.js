/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from 'axios';

/**
 * 新建书本
 * @param url
 * @param data
 * @returns {Promise<T>}
 */
export function postBook(url, data) {
  return axios.post(url, data)
}

function getbook() {
  return axios.get(url);
}

/**
 * 获取书
 * @param url
 * @returns {*}
 */
export function getBook(url) {
  const data = axios.get(url);
  return getbook()
}