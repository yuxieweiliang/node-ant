/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

/**
 * 新建书本
 * @param data
 * @returns {Promise<T>}
 */
export function postBook(data) {

  console.log('////////', data);
  return axios.post('book/new', data)
}

/**
 * 获取书的列表
 * @param url
 * @returns {Promise<T>}
 */
export function getBooks(url) {
  return  axios.get('book');
}

/**
 * 根据作者的 ID， 获取 作品列表
 * @param book_id
 * @returns {Promise<T>}
 */
export function getWorksByAuthorId(book_id = '121212') {
  const data = { params: { book_id } };
  return axios.get('book', data).then(res => console.log(res));
}

/**
 * 根据书本的ID，获取书的详细信息
 * @param book_id
 * @returns {Promise<T>}
 */
export function getBookById(book_id = '121212') {
  const data = { params: { book_id } };
  return axios.get('book', data).then(res => console.log(res));
}