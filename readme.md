## koa-practice

### Project Dependencies

Built on [koa](https://koajs.com) and [react](https://reactjs.org), it supports [mysql](https://www.npmjs.com/package/mysql) and [redis](https://www.npmjs.com/package/redis) queries and depends on the [Node.js](https://nodejs.org) environment.

### Project Repository

https://github.com/meizikeai/koa-practice.git

### Project Structure

| directory    | describe          | details |
| ------------ | ----------------- | ------- |
| client       | react.js          | --      |
| pm2          | pm2.keymetrics.io | --      |
| public       | koa-static        | --      |
| server       | koa.js            | --      |
| views        | koa-views         | --      |
| package.json | package.json      | --      |

### Development Environment

```sh
$ git clone https://github.com/meizikeai/koa-practice.git
$ cd koa-practice && npm i
$ npm run start
```

Development depends on [eslint.org](https://eslint.org), please use an editor that supports it. [Visual Studio Code](https://code.visualstudio.com) is recommended.

### Access Example

+ http://127.0.0.1:3000
+ http://127.0.0.1:3000/demo
+ http://127.0.0.1:3000/json
+ http://127.0.0.1:3000/string

### Precautions

The latest version uses the `ECMAScript Modules` mode. The previous `CommonJS` mode is not recommended (see branch 2024).
