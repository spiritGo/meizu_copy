/**
 * Created by spirit on 2019/3/8.
 */
const express = require("express");
const pool = require("./pool");
const router = express.Router();

function routers(api, sql) {
    "use strict";
    router.get(api, (req, res)=> {
        "use strict";
        pool.query(sql, (err, data)=> {
            if (err) throw err;
            if (data.length > 0) res.send(data);
            else res.send({err: 404, msg: "not found"})
        });
    });
}

function queryInfo(api, sql) {
    "use strict";
    router.post(api, (req, res)=> {
        var mlPhone = req.body.phone;
        pool.query(sql, [mlPhone], (err, data)=> {
            if (err) throw err;
            if(data.length>0) res.send("登陆成功");
            else res.send("登录失败");
        });
    });
}

function insertInfo(api,sql){
    "use strict";
    router.post(api,(req,res)=>{
        var body = req.body;
        pool.query(sql,[body],(err,data)=>{
            if(err) throw err;
            if(data.affectedRows>0) res.send("ok");
            else res.send(err);
        });
    })
}

routers("/meizu/server", "select * from m_navbar");
routers("/meizu/server/question", "select * from server_question");
queryInfo("/meizu/login", "select * from m_login where mlPhone=?");
insertInfo("/meizu/register","insert into m_login set ?");

module.exports = router;
