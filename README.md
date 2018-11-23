> # start


### 启动作者端
npm run dev:admin

 ### 启动读者端
npm run dev:web

 ### 启动app端
npm run dev:app

### 创建数据库
npm run initpg

### 启动服务端
npm start

作者端前后端分离，读者端服务端渲染，app使用RN，只开发api。

- client: 客户端
  - admin: 作者端
    - components: 组件
    - reducers: 数据 store
    - router: 路由
    - src: 页面
    - style: 公共样式
    - views: 公共模板
  - api: api
  - app: app
  - config: 配置
  - utils: 工具函数
  - web: 读者端

- public: 公共资源
  - images: 图片

- server: 服务端
  - controllers: API
  - database: 数据库
  - docs: 文档
  - middleware: 中间件
  - Schema: GraphQL
  - socket: socket
  - sql: API 使用到的sql
  - webpack: react 服务端渲染配置

- tool: 工具
  - config: 数据库配置（创建数据库时）
  - createPage: 创建自定义组件默认内容
  - PG_SQL: 创建数据库表格SQL语句
  - 数据库: 数据库设计 & 输出API格式实例


> ### 页面路由
/login # 登陆
/register # 注册
/book # 书籍列表
  /book/new # 新建
  /book/edit # 编辑
/architecture # 架构列表
  /architecture/new # 新建
  /architecture/edit # 编辑
/database
/setting


### 其他

https://github.com/reactjs/express-react-views

网站:
设定：
网站可以构建一个设定，其他人可以提出要求，作者可以同意采用。
头脑风暴：
可以做头脑风暴联想，单词的近义词，同类词，联想词。


作家专区：
首页/课堂/专栏/咨询
我的专区：
专区首页/作品管理/数据统计/稿酬收入/劳务收入/作家咨询/积分兑换/互动管理
作品管理：
作品设置/草稿箱/已发布章节/回收站
作品设置：
作品名称/首发站点/书号/作品类型/授权级别/编辑分组/字数/收藏/作品状态/作品标签/作品介绍/扉页寄语
新建章节：
选择章节/选择类型/统计字数/保存/发布

新建作品：
选择类型/目标读者/






