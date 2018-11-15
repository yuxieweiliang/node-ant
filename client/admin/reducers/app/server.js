/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from 'axios';
export function loading(url) {
  return axios.get(url)
}