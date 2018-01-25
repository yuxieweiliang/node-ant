import mongoose, { Schema } from 'mongoose';
import './schemas'
// 连接数据库
let db = mongoose.connect("mongodb://localhost/test");


db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});

export default db;
///     forever  nodemon