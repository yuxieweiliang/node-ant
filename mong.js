// mongod --dbpath E:\00_project\01_node\mong\db
let mongoose = require("mongoose");
// 连接数据库
let db = mongoose.connect("mongodb://127.0.0.1:27017/test1");
let Schema = mongoose.Schema;

///   Schema  用来定义数据模型
let tschema = new Schema({
  date: { type: Date, default: Date.now },
  name : String
});

function preFind(next) {
  var word = this.getQuery().word;
  console.log('-------------------------');
  if(word === undefined) return;

  // 从真实的Query中删掉虚拟属性
  delete this._conditions.word;
  // 构造正则表达式
  var regex = new RegExp(word);
  // 全文检索
  console.log(regex);

  this.where({ $or: [{ name: regex }, { content: regex }, { author: regex }] });
  next()
}


tschema.pre('findOne', preFind).pre('find', preFind);


let TestSchema= db.model("someOne", tschema);



// console.log(JSON.stringify(json))
/*TestSchema.create({ name: JSON.stringify(json).toString() }, function(error, docs){
  console.log(docs);
});*/



//我们只需要把显示的属性设置为大于零的数就可以，当然1是最好理解的，
// _id是默认返回，如果不要显示加上("_id":0)，
// 但是，对其他不需要显示的属性且不是_id，如果设置为0的话将会抛异常或查询无果。



const json = [{
  key: 'name',
  value: 'buzhidao',
  context: [{
    key: '',
    value: ''
  }]
},{
  key: 'age',
  value: 'buzhidao2',
}];



TestSchema.find({word: 'key'},function(err,docs){
 //docs 查询结果集

 console.log(docs)
 });

// tschema.add({ age: 'number', color: 'string', price: 'number' });

/*TestSchema.create({ age: 100000 }, function(error, docs){
  console.log(docs);
});*/
/*TestSchema.remove(function(docs) {
  console.log(docs)
});*/
/*TestSchema.findOne({ age: 27}, function (err, doc){
  // 查询符合age等于27的第一条数据
  // doc是查询结果
  // console.log(doc)
});*/


db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});


///     forever  nodemon