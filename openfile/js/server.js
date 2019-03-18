// server.js

//引入插件
const express = require("express");
const pool = require("./pool.js");
const listRouter = require("./listRouter.js");
const indexRouter = require("./indexRouter.js");
const meizuindexRouter = require("./meizuindeRouter.js");
const serverRouter = require("./server_router.js");
const bodyParser = require("body-parser");

//创建服务器
const server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended:false
}));

//托管目录
server.use(express.static("openfile"));

//挂载路由器
server.use("/page",listRouter);
server.use("",indexRouter);
server.use("",meizuindexRouter);
server.use("",serverRouter)
