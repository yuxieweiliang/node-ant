/**
 * Created by xueyufei on 2018/11/26.
 */

const SQL = function(){ };

/**
 * 保存
 * @param tableName 数据表名称
 * @param fields 更新的字段和值，json格式
 * @param ret
 */
SQL.prototype.save = function(tableName, fields, ret = ' RETURNING *'){
  let field = [], values = [], count = 0, num = [];

  if(!tableName) {console.log('tableName is request!'); return}
  let text = `insert into ${ tableName }(`;

  for(let i in fields){
    count++;
    field.push(i);
    values.push(fields[i]);
    num.push("$"+count);
  }
  text += field.join(",") +") values("+num.join(",")+") " + ret;
  return {text, values};
};

/**
 * 删除
 * @param tableName 数据表名称
 * @param fields 条件字段和值，json格式
 */
SQL.prototype.remove = function(tableName, fields){
  let field = [], values = [], count = 0;

  if(!tableName) {console.log('tableName is request!'); return}

  let text = `delete from ${ tableName } where `;

  for(let i in fields){
    count++;
    field.push(`${i} = $${count}`);
    values.push(fields[i]);
  }
  text += field.join(" and ");
  return {text, values};
}

/**
 * 修改
 * @param tableName 数据表名称
 * @param fields 条件字段和值，json格式
 * @param conditions 更新的字段和值，json格式
 */
SQL.prototype.update = function(tableName, fields, conditions){
  let condition = [], values = [], count = 0, field = [];

  if(!fields) {console.log('tableName is request!'); return}

  let text = `update ${ tableName } set `;
  for(let i in fields){
    count++;
    field.push(`${i} = $${count}`);
    values.push(fields[i]);
  }
  text += field.join(",") +" where ";

  for(let j in conditions) {
    count++;
    condition.push(`${j} = $${count}`);
    values.push(conditions[j]);
  }
  text += condition.join(" and ");
  return {text, values};
}

/**
 * 查询
 * @param tableName 数据表名称
 * @param fields 条件字段和值，json格式
 * @param returnStr 返回字段
 * @param conditions 分页等条件
 * Example:
 *
 * select('set_values', undefined, undefined, ` item_id = 1 OR item_id = 2`)
 *
 * select('set_values', undefined, undefined, ` item_id = 1 OR item_id = 2`)
 *
 */
SQL.prototype.select = function(tableName, fields, returnStr = '*', conditions = ''){
  let field = [], values = [], sql = [], count = 0;

  if(!tableName) {console.log('tableName is request!'); return}

  let text = `select ${returnStr} from ${tableName} where `;

  for(let key in fields){
    count++;
    field.push(`${key} = $${count}`);
    sql.push(`${key} = ${fields[key]}`);
    values.push(fields[key]);
  }

  console.log('======== sql ===========: ', text + sql.join(" and ") + conditions)
  return {
    text: text + field.join(" and ") + conditions,
    values,
    sql: text + sql.join(" and ") + conditions
  };
};

export default new SQL();


