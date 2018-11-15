/**
 * 腾讯云微信小程序解决方案
 * Demo 数据库初始化脚本
 * @author Jason
 */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const pgConfig = require('./config/pgConfig.json');
const client = new Client(pgConfig.Postgre);
const ROOTS = process.cwd();
const pg_path = `${ROOTS}/tool/PG`;
console.log(`
\n======================================
开始初始化数据库...
`);

/**
 * 初始化 SQL 文件路径
 * 读取 .sql 文件内容
 */
function readSql(url) {
  const PATH =  path.normalize(path.join(pg_path, url));
  return fs.readFileSync(PATH, 'utf8');
}

let i = 0;
async function initPg(sqlList) {
  const item = readSql(`./${sqlList[i]}`);
  try{
    await client.query(item);
    console.log(`${sqlList[i]}......成功`);
  }catch(error) {
    console.log(error);
  }

  if(i < sqlList.length -1) {
    i++;
    await initPg(sqlList);
  } else {
    return true;
  }
}

const fileDir = fs.readdirSync(pg_path);
(async function init() {
  try{
    await client.connect();
    console.log("数据库连接成功...\b", '开始执行 SQL 文件...\n');

    await initPg(fileDir);

    await client.end();
  }catch(error) {
    console.log("数据库创建失败....................", err);
  }
})();

