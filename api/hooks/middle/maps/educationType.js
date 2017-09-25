/**
 * 查询教育分类
 */

module.exports = {

  // 请求方式
  method: 'GET',

  // 服务端的action
  action: 'Nurse/GetTopNode',

  // 参数映射关系
  map: {
    parentId: 'parent_id', // 病人id
    nursingUnit: 'nursing_unit',
  }
};
// parent_id=0
// nursing_unit=030702H