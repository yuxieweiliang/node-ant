/**
 * Created by xueyufei on 2018/10/17.
 */
/**
 * 腾讯云微信小程序解决方案
 * Demo 数据库初始化脚本
 * @author Jason
 */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');


export default async function(config) {
  const client = new Client(config);
  console.log(
    '\n======================================\n',
    '\n开始初始化数据库...\n'
  );

  try{
    await client.connect();
    console.log("数据库连接成功...\b");


  }catch(err) {
    console.log("创建失败....................", err);
  }

  await client.end()
}


