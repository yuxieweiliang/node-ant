/**
 * 腾讯云微信小程序解决方案
 * Demo 数据库初始化脚本
 * @author Jason
 */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const pgConfig = require('../config/pgConfig.json');
const client = new Client(pgConfig.Postgre);

console.log('\n======================================');
console.log('开始初始化数据库...');

function readSql(url) {
  const PATH =  path.normalize(path.join(__dirname, url));
  return fs.readFileSync(PATH, 'utf8');
}

/**
 * 初始化 SQL 文件路径
 * 读取 .sql 文件内容
 */
const delete_table                = readSql('./delete_table.sql');
const create_type                 = readSql('./create_type.sql');

const architectures               = readSql('./architectures.sql');

const book_chapters               = readSql('./book_chapters.sql');
const books                       = readSql('./books.sql');

const comments                    = readSql('./comments.sql');
const clients                     = readSql('./clients.sql');

const ranking_details             = readSql('./ranking_details.sql');
const rankings                    = readSql('./rankings.sql');
const replys                      = readSql('./replys.sql');
const role_sets                   = readSql('./role_sets.sql');
const roles                       = readSql('./roles.sql');

const set_items                   = readSql('./set_items.sql');
const set_templates               = readSql('./set_templates.sql');
const set_values                  = readSql('./set_values.sql');
const settings                    = readSql('./settings.sql');

const time_point_events            = readSql('./time_point_events.sql');

const user_information            = readSql('./user_information.sql');
const users                       = readSql('./users.sql');

const word_similar                = readSql('./word_similar.sql');
const word_thinks                 = readSql('./word_thinks.sql');
const words                       = readSql('./words.sql');


async function init() {
  try{
    await client.connect();
    console.log("数据库连接成功...\b", '开始执行 SQL 文件...\n');

    await client.query(delete_table);
    console.log('\x1b[31m',"... 删除表成功....................", '\x1b[37m');
    await client.query(create_type);
    console.log('\x1b[32m', "... 创建符合类型成功....................\n", '\x1b[37m');


    await client.query(architectures);
    console.log("architectures");

    await client.query(book_chapters);
    console.log("book_chapters");
    await client.query(books);
    console.log("books");

    await client.query(comments);
    console.log("comments");
    await client.query(clients);
    console.log("clients");

    await client.query(ranking_details);
    console.log("ranking_details");
    await client.query(rankings);
    console.log("rankings");
    await client.query(replys);
    console.log("replys");
    await client.query(role_sets);
    console.log("role_sets");
    await client.query(roles);
    console.log("roles");

    await client.query(set_items);
    console.log("set_items");
    await client.query(set_templates);
    console.log("set_templates");
    await client.query(set_values);
    console.log("set_values");
    await client.query(settings);
    console.log("settings");

    await client.query(time_point_events);
    console.log("time_point_events");

    await client.query(user_information);
    console.log("user_information");
    await client.query(users);
    console.log("users");

    await client.query(word_similar);
    console.log("word_similar");
    await client.query(word_thinks);
    console.log("word_thinks");
    await client.query(words);
    console.log("words");



    console.log(" 数据库创建成功....................");
  }catch(err) {
    console.log("数据库创建失败....................", err);
  }

  await client.end()
}

init();


