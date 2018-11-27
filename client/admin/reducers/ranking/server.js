/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function postRanking(data) {
  console.log('////////', data);
  return axios.post('ranking/new', data)
}

/**
 * 新建排行榜
 * @param data
 * @returns {Promise<T>}
 */
export function getRankingList(data) {
  console.log('////////', data);
  return axios.get('ranking', data)
}
