/**
 * Created by xueyufei on 2018/10/17.
 */
const { Client } = require('pg');
const pgConfig = require('../config/pgConfig.json');
const client = new Client(pgConfig.Postgre);


const PG = function(){
  console.log("准备向****数据库连接...");
};

PG.prototype.connection = function(){
  client.connect(function (err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      console.log("数据库连接成功....................");
    });
  });
};

function validate(data) {
  if(data) {
    return {
      data,
      error: null,
      state: 0
    }
  } else {
    return {
      data: null,
      error: '数据库未找到',
      state: 1
    }
  }
}
/**
 * 查询
 * @param str 查询语句
 * @param value 相关值
 */
async function clientHelper(str, value){
  try{
    const result = await client.query(str, value);
    return validate(result.rows);
  } catch(error) {
    return validate();
  }
}












/**
 * 保存
 * @param tableName 数据表名称
 * @param fields 更新的字段和值，json格式
 * @param ret
 */
PG.prototype.save = async function(tableName, fields, ret = ''){
  let field = [], value = [], count = 0, num = [];

  if(!tableName) {console.log('tableName is request!'); return}
  let str = `insert into ${ tableName }(`;

  for(let i in fields){
    count++;
    field.push(i);
    value.push(fields[i]);
    num.push("$"+count);
  }
  str += field.join(",") +") values("+num.join(",")+") " + ret;
  return await clientHelper(str, value);
};

/**
 * 删除
 * @param tableName 数据表名称
 * @param fields 条件字段和值，json格式
 * @param cb
 */
PG.prototype.remove = async function(tableName,fields,cb){
  let field = [], value = [], count = 0;

  if(!tableName) {console.log('tableName is request!'); return}

  let str = `delete from ${ tableName } where`;

  for(let i in fields){
    count++;
    field.push(i+"=$" +count);
    value.push(fields[i]);
  }
  str += field.join(" and ");
  return await clientHelper(str, value, cb);
}

/**
 * 修改
 * @param tableName 数据表名称
 * @param mainFields 更新的字段和值，json格式
 * @param fields 条件字段和值，json格式
 * @param cb
 */
PG.prototype.update = async function(tableName, mainFields, fields, cb){
  let field = [], value = [], count = 0;

  if(!tableName) {console.log('tableName is request!'); return}

  let str = `update ${ tableName } set`;
  for(let i in fields){
    count++;
    field.push(i+"=$"+count);
    value.push(fields[i]);
  }
  str += field.join(",") +" where ";
  field = [];
  for(let j in mainFields){
    count++;
    field.push(j+"=$"+count);
    value.push(mainFields[j]);
  }
  str += field.join(" and ");
  return await clientHelper(str, value, cb);
}

/**
 * 查询
 * @param tableName 数据表名称
 * @param fields 条件字段和值，json格式
 * @param returnStr 返回字段
 * @param cb
 */
PG.prototype.select = async function(tableName, fields, cb, returnStr = '*'){
  let field = [], value = [], count = 0;

  if(!tableName) {console.log('tableName is request!'); return}

  let str = `select ${returnStr} from ${tableName} where `;

  for(let key in fields){
    count++;
    field.push(key+"=$"+count);
    field.push(`${key}=$${count}`);
    value.push(fields[key]);
  }
  str += field.join(" and ");
  return await clientHelper(str, value, cb);
};

const pg = new PG();
pg.connection();














export default function(app) {
  // client.connect();
  app.use(async function(ctx, next) {
    app.context.pg = pg;
    await next()
  });

}

