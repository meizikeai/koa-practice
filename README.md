# koa-practice

### 项目构架

基于[koa](https://koajs.com)[2.13.0]、[react](https://reactjs.org)[16.12.0]构建，默认支持[Qconf](https://github.com/Qihoo360/QConf)、[mysql](https://www.npmjs.com/package/mysql)、[redis](https://www.npmjs.com/package/redis)进行数据查询；依赖[Node.js](https://nodejs.org)[v12.18.3]。

#### 项目地址

https://github.com/meizikeai/koa-practice.git

#### 项目结构

| 路径         | 描述              | 详情 |
| ------------ | ----------------- | ---- |
| bin          | 启动文件          | -    |
| client       | 客户端文件        | --   |
| pm2          | pm2.keymetrics.io | --   |
| public       | koa-static        | --   |
| server       | 服务端文件        | --   |
| views        | koa-views         | --   |
| package.json | package.json      | --   |

#### 开发环境

- 克隆项目 - `$ git clone https://github.com/meizikeai/koa-practice.git`
- 安装依赖 - `$ cd koa-practice && npm i`
- 启动项目 - `$ npm run start`

开发依赖[eslint.org](https://eslint.org)，请使用支持它的编辑器。推荐[Visual Studio Code](https://code.visualstudio.com)编辑器。

#### 访问地址
  - http://127.0.0.1:3000 - 本地
