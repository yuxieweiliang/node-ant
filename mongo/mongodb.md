
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













































