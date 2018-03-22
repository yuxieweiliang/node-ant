/**
 * 所有的api 列表
 */
const createApi = function(common) {
  return function(api) {
    return common + '/' + api
  }
};

/**
 * 公共api
 */
const commonRoot = createApi('common');
const common = {
  getLoginToken: commonRoot('GetLoginToken'),
  getHISUserInfo: commonRoot('GetHISUserInfo'),
};

/**
 * report
 */
const reportRoot = createApi('Report');
const report = {
  getReportWidget: reportRoot('GetReport_widget'),
};


export default {

  /*    common    */
  common,

  /*    report    */
  report
}
