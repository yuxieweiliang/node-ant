/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function postTemplate(data) {
  console.log('////////', data);
  return axios.post('template/new', data)
}


/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function getTemplateList(data) {
  console.log('////////', data);
  return axios.get('template', data)
}
/**
 * 新建排行榜
 * @param id
 * @returns {Promise<T>}
 */
export function getTemplate(id) {
  console.log('////////', id);
  return axios.get(`template/${id}`)
}
