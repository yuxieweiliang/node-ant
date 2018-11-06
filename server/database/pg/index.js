/**
 * Created by xueyufei on 2018/10/17.
 */
const { Client } = require('pg');
const pgConfig = require('../config/pgConfig.json');
const client = new Client(pgConfig.Postgre);


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

const pg = {

  query: async function(query) {
    try{
      const res = await client.query(query);
      const data = res.rows.length > 0 ? res.rows : null;

      console.log('findOne', data);
      return validate(data)
    }catch(error) {
      client.end();
      console.log("数据库连接失败....................");
      return error
    }
  },
  find: async function(query) {
    try{
      return await this.query(query);
    }catch(error) {
      return error;
    }
  },
  save: async function(query) {
    try{
      return await this.query(query);
    }catch(error) {
      return error;
    }
  },
  findOne: async function(query) {
    try{
      const res = await this.query(query);
      const data = res.data ? res.data[0] : null;
      return data ? {...res, data} : res
    }catch(error) {
      return error;
    }
  }
};

export default function(app) {
  client.connect();
  console.log("数据库连接成功....................");
  app.use(async function(ctx, next) {
    app.context.pg = pg;
    await next()
  });

}

