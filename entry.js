let path = require('path');
let fs = require('fs');


let argv = process.argv;

console.log(__dirname);
console.log(argv);

process.stdout.write('递归创建目录的函数，只支持一个字符串路径作为参数！\n');



//  process.exit(1);    退出



// 标准化当前路径、使用sep分隔  normalize 规范 '..' || '.'
let normal = path.resolve(path.normalize(__dirname));

// 检测标准化路径是否为绝对路径  path.sep 平台分隔符 '/'
let normalarr = normal.split(path.sep);


console.log(path.sep);
console.log(normal);
console.log(normalarr);

process.stdout.write('格式化当前路径！\n');

let cwd = process.cwd();
let cwds = cwd.split(path.sep); // 用平台分隔符，并且将当前路径分割


console.log(cwds);
console.log(path.isAbsolute(path.sep)); // 判断当前路径是绝对路径
console.log(path.isAbsolute('E:/'));

let theDir = '';
for (let dir of normalarr) {
  theDir += dir + path.sep;
  let isExists = fs.existsSync(theDir);

  let parseDir = path.parse(theDir);
  console.log(parseDir)
}