import mongoose from 'mongoose';
import '../schemas';

const db = mongoose.connect('mongodb://127.0.0.1:27017/test');

const model = {
  Book: mongoose.model('Book'),
  Camp: mongoose.model('Camp'),
  Geography: mongoose.model('Geography'),
  Monster: mongoose.model('Monster'),
  Role: mongoose.model('Role'),
  Rule: mongoose.model('Rule'),
  User: mongoose.model('User'),
};

db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});

export default model;
