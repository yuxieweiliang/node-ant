/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

export function logout() {
  return axios.get('logout')
}

export function login(data) {
  return axios.post('login', { data })
}