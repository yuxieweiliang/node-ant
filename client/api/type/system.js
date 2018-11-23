/**
 * 所有的api 列表
 */
const createApi = function(common) {
  return function(api) {
    return '/api/' + common + '/' + api
  }
};

/**
 * 公共api
 */
const commonRoot = createApi('common');
export const common = {
  postImg: commonRoot('update-img'),
  postImg2: commonRoot('update-img2'),
};