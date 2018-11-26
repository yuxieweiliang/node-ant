/**
 * Created by xueyufei on 2018/11/15.
 */
import axios from '@utils/axios';

export function register(data) {
  return axios.post('system/register', data)
}

export function login(params) {
  return axios.get('system/login', { params })
}

export function logout(params) {
  return axios.get('logout', { params })
}