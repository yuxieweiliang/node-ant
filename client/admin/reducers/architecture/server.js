/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

/**
 * 新建书本
 * @param data
 * @returns {Promise<T>}
 */
export function postArchitecture(data) {
  return axios.post('architecture/new', data)
}

/**
 * 获取书的列表
 * @returns {Promise<T>}
 */
export function getArchitectures() {
  return  axios.get('architecture');
}

/**
 * 根据书本的ID，获取书的详细信息
 * @param book_id
 * @returns {Promise<T>}
 */
export function getArchitectureById(book_id = '121212') {
  const data = { params: { book_id } };
  return axios.get('book', data).then(res => console.log(res));
}