
mongodb 使用

将mongodb加入环境变量，
> mongo  // 进入mongodb
> db.movies.find() // 查看movies下的所有数据



## 启动数据库
cd mongodb/mongo/bin
mongod --dbpath ../db

cd mongo\bin                                      // 切换到mongod.exe目录
mongod --dbpath E:\00_project\01_node\mong\db    // 用来创建并运行数据库


数据 = {
  用户: {账号, 密码, 名字, 昵称, 介绍, 书架, 架构, 喜欢, 收藏, 好友, }
  商品: {名称, 介绍, 图片, 收藏数, 喜欢数}
  架构: {名称, id, 集合: {头部, 中间, 底部}}
}



/*
*
*
 写作：
 首先建立一张表单，然后每一张表单都会对应一个关系，首先分为敌我双方

 阵营图

 关系图

 等级图

 地理图

 资料库

 设定 -> 人物、兵器、科技、宠物等

 排行榜


 绘画



 * */










































