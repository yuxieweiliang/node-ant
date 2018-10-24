import mongo from './mongo'
import redis from './redis'
import pg from './pg'
const pgConfig = require('./config/pgConfig.json');

export default function(app) {
  /**
   * mongodb
   */
  // mongo({ config })

  /**
   * postgresSql
   */
  pg(pgConfig.Postgre);
}