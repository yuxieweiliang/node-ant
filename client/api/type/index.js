import config from '../../config/config'
/**
 * 所有的api 列表
 */
const createApi = function(root, common) {
  return function(api) {
    return root + '/api/' + common + '/' + api
  }
};

/**
 * 公共api
 */
const _common = createApi(config.api, 'common');
const _user = createApi(config.api, 'user');
const _book = createApi(config.api, 'book');




export const common = {
  postImg: _common('update-img'),
  postImg2: _common('update-img2'),
};