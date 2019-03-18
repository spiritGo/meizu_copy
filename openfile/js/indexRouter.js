// indexRouter.js
const express = require("express");
const router = express.Router();
const pool = require("./pool.js");

router.get("/indexdata", (req, res) => {
	pool.query("SELECT * FROM m_navbar", (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send({
			err: 404,
			msg: "数据找不到"
		});
	});
});

router.get("/secondNav", (req, res) => {
	pool.query("SELECT * FROM second_nav", (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send({
			err: 404,
			msg: "数据找不到"
		});
	});
});

router.get("/indexSection", (req, res) => {
	pool.query("SELECT * FROM index_section", (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send({
			err: 404,
			msg: "数据找不到"
		});
	});
});

router.get("/recommend", (req, res) => {
	pool.query("SELECT * FROM m_phone", (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send(data);
		} else {
			res.send({
				err: 404,
				msg: "数据找不到"
			});
		}
	});
});

router.get("/navchild", (req, res) => {
	pool.query("SELECT * FROM header_nav_child", (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send({
			err: 404,
			msg: "数据找不到"
		})
	});
});

router.get("/phonics", (req, res) => {
	pool.query("SELECT * FROM phonics", (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send({
			err: 404,
			msg: "数据找不到"
		});
	});
});

function getnavdata(interface, table) {
	router.get(interface, (req, res) => {
		pool.query("SELECT * FROM " + table, (err, data) => {
			if (err) throw err;
			if (data.length > 0) res.send(data);
			else res.send({
				err: 404,
				msg: "数据找不到"
			});
		});
	});
}

getnavdata("/accessories", "accessories");
getnavdata("/life","life");

module.exports = router;