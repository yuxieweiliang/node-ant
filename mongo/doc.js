// mongod --dbpath E:\00_project\01_node\mong\db
let mongoose = require("mongoose");
// 连接数据库
let db = mongoose.connect("mongodb://127.0.0.1:27017/test");

///   Schema  用来定义数据模型

let tschema = new mongoose.Schema({
  name : { type:String },
  age  : { type:Number, default:18 },
  gender : { type:Boolean, default:true },
  time : { type:Number, default:Date.now },
  email : { type:String }
});

let TestSchema= db.model("someOne", tschema);

/*var TestEntity = new TestSchema({
 name : "helloworld",
 age  : 28,
 email: "helloworld@qq.com"
 });*/

/*TestEntity.save(function(error,doc) {
 if(error) {
 console.log("error :" + error);
 } else {
 console.log(doc);
 }
 });*/


// 创建数据，因为上面的函数查询到是28所以这里添加的查不到，而且这里如果年龄变了，哪里也查不到。
TestSchema.create({
  name : "test_create",
  age  : 28,
  email: "tom@qq.com"
},function(error,doc){
  console.log(doc);
});

let TestEntity = new TestSchema({
  name : "jerry",
  age  : 28,
  email: "jerry@qq.com"
});

TestEntity.save(function(error,doc) {
  console.log(doc);
});

TestEntity.update({name : 'jerry'}, {$set : { age : 16 }}, function(error, docs){
  if(error) {
    console.log(error);
  } else {
    console.log(docs);
    console.log('Update success!');
  }
});

TestSchema.remove({ "name": "jerry" }, function(error){
  if(error) {
    console.log(error);
  } else {
    console.log('Delete success!');
  }
});
TestSchema.remove({ "age": 20 }, function(error){
  if(error) {
    console.log(error);
  } else {
    console.log('Delete success!');
  }
});

// find的collback函数有两个值，一个是错误，一个是值
TestSchema.find({ "name": "jerry" }, function (error, docs) {
  if(error){
    console.log("error :" + error);
  }else{
    console.log(docs.length); //docs: age为28的所有文档
    console.log(docs); //docs: age为28的所有文档
  }
});

// 首先添加一些数据
TestSchema.create([
  { name:"test1", age:20 },
  { name:"test2", age:30 },
  { name:"test3", age:24 },
  { name:"test4", age:18 },
  { name:"test5", age:60 },
  { name:"test6", age:50, email:"t6@qq.com" },
  { name:"test7", age:40, email:"t7@163.com" },
  { name:"test8", age:27 },
  { name:"test9", age:27, email:"t9@yeah.net" },
  { name:"test10",age:65 }
], function(error, docs) {
  if(error) {
    console.log(error);
  } else {
    console.log('save ok');
  }
});


//我们只需要把显示的属性设置为大于零的数就可以，当然1是最好理解的，
// _id是默认返回，如果不要显示加上("_id":0)，
// 但是，对其他不需要显示的属性且不是_id，如果设置为0的话将会抛异常或查询无果。

TestSchema.find({},{name:1, age:1, _id:0}, function(err,docs){
  //docs 查询结果集
  // console.log(docs)
});

TestSchema.findOne({ age: 27}, function (err, doc){
  // 查询符合age等于27的第一条数据
  // doc是查询结果
  // console.log(doc)
});

TestSchema.findById('obj._id', function (err, doc){
  //doc 查询结果文档
  console.log(doc)
});

//  "$lt"(小于)，"$lte"(小于等于),"$gt"(大于)，"$gte"(大于等于)，
//  "$ne"(不等于)，"$in"(可单值和多个值的匹配)，"$or"(查询多个键值的任意给定值)，
//  "$exists"(表示是否存在的意思)"$all"。

TestSchema.find({"age":{"$gt":18,"$lt":60}},function(error, docs){
  //查询所有nage大于18小于60的数据
  console.log(docs.length)
});
TestSchema.find({ age:{ $ne:24}},function(error,docs){
  //查询age不等于24的所有数据
});

TestSchema.find({name:{$ne:"tom"},age:{$gte:18}},function(error,docs){
  //查询name不等于tom、age>=18的所有数据
});

TestSchema.find({ age:{ $in: 20}},function(error,docs){
  //查询age等于20的所有数据
});


TestSchema.find({ age:{$in:[20,30]}},function(error,docs){
  //可以把多个值组织成一个数组
});
TestSchema.find({"$or":[{"name":"yaya"},{"age":28}]},function(error,docs){
  //查询name为yaya或age为28的全部文档
});

TestSchema.find({name: {$exists: true}},function(error,docs){
  //查询所有存在name属性的文档
});

TestSchema.find({telephone: {$exists: false}},function(error,docs){
  //查询所有不存在telephone属性的文档
});

// 查询以age为条件、过滤属性为null的所有文档并console输出，但必须使用
// limit函数来限制返回的文档数量。
TestSchema.find({age:27},null,{limit:4},function(err,docs){
  console.log(docs);
});

// skip函数和limit类似，都是对返回结果数量进行操作，
// 不同的是skip函数的功能是略过指定数量的匹配结果，返回余下的查询结果。
TestSchema.find({},null,{skip:4},function(err,docs){
  console.log(docs);
});

//sort函数可以将查询结果数据进行排序操作，该函数的参数是一个或多个键/值对，
// 键代表要排序的键名，值代表排序的方向，1是升序，-1是降序。
TestSchema.find({},null,{sort:{age:-1}},function(err,docs){
//查询所有数据，并按照age降序顺序返回数据docs
  console.log(docs);
});
TestSchema.find({},
  {name: 1, age: 1, _id: 0 },
  {sort:{age: 1 }},
  function(err,docs){
    console.log(docs);
  });

db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});


///     forever  nodemon
