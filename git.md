# git 使用
git rm -rf --cached .  清除缓存 -r 循环 -f强制

# 添加 ssh
打开git bash
ssh-keygen -t rsa -C "yunruofengsheng@126.com"
-> 剩下的选项 全部用inter 默认
-> 然后再 C:/user/xueyufei/.ssh 目录下

#先删除本地 git源，再重新添加 git源
git remote rm origin
git remote add origin [url] -> git remote add origin git@github.com:yuxieweiliang/ladder-stack.git

# 提交
git push origin master -> git push


## 启动数据库
cd mongodb/mongo/bin
mongod --dbpath ../db
###

# 清理本地缓存命令
git clean -df

#清空git暂存区
git rm -r --cached .
#清空git 指定暂存区文件
git rm -r --cached filename


// 将本地master 强制替换线上 master
git push origin master:master -f


---------------------------------------
git push origin develop:master -f
把本地的 develop 分支强制(-f)推送到远程 master








    git push --set-upstream origin last

