// meizuindeRouter.js
const express = require("express");
const router = express.Router();
const pool = require("./pool.js");

function routerGet(interface,sql) {
    router.get(interface, (req, res) => {
        pool.query(sql, (err, data) => {
            if (err) throw err;
            if (data.length > 0) res.send(data);
            else res.send({ err: 404, msg: "not found!" });
        });
    });
}

routerGet("/meizuindex/videos","select * from meizuindex_video")
routerGet("/meizuindex/saleinfo","select * from meizuindex_saleinfo")
routerGet("/meizuindex/evaluate","select * from meizuindex_evaluate")
routerGet("/meizuindex/16pic","select * from meizuindex_16pic")
routerGet("/meizuphone/shoplist","select * from m_phone")
routerGet("/meizuphone/recommendlist","select * from recommend")
routerGet("/meizuphone/phonics","select * from phonics")
routerGet("/meizuphone/accessories","select * from accessories")
routerGet("/meizuphone/life","select * from life")

module.exports = router;