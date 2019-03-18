-- meizu.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS meizu;
CREATE DATABASE meizu CHARSET=UTF8;

USE meizu;

#手机详情页
CREATE TABLE m_phone_detail(
	mpdId INT PRIMARY KEY AUTO_INCREMENT,
	mpdPic VARCHAR(500),
	mpdType VARCHAR(100),
	mpdNetType VARCHAR(100),
	mpdColor VARCHAR(500),
	mpdMemory VARCHAR(50),
	mpdCombo VARCHAR(100),
	mpdStages VARCHAR(150)
);
#插入手机详情页数据
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0FtqgmuAHzQbAAflWG0_wvs749.png680x680.jpg,../images/Cgbj0VtqgmaAHfhqAAFiPmKWlSs471.png120x120.jpg,../images/Cgbj0FtqgmaAZbciAAIlAkUcoM0146.png120x120.jpg","魅族 15,魅族 M15,魅族 15 Plus,魅族 16th Plus,魅族 16th Plus,魅族 16 X","全网通公开版","{'静夜黑':'../images/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png80x80.png','远山白':'../images/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png80x80.png','极光蓝':'../images/Cgbj0FujRsOADooMAAbehLx6_Co899.png80x80.png'}","6+64GB,6+128GB,8+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥851.81×3期(含手续费19.15/期),¥435.06×6期(含手续费18.73/期),¥223.77×12期(含手续费15.61/期)");
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0VtqgkGAGR7oAAlO1raU1PA201.png680x680.jpg,../images/Cgbj0FtqgjiAKsrfAANgXYqK538272.png120x120.jpg,../images/Cgbj0FtqgkGAAJefAASvxzwhjFc615.png120x120.jpg,../images/Cgbj0Vtqgj-AQW52AAJZZteaDhA041.png120x120.jpg","魅族 15,魅族 M15,魅族 15 Plus,魅族 16th Plus,魅族 16th Plus,魅族 16 X","全网通公开版","{'静夜黑':'../images/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png80x80.png','远山白':'../images/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png80x80.png','极光蓝':'../images/Cgbj0FujRsOADooMAAbehLx6_Co899.png80x80.png'}","6+64GB,6+128GB,8+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥1090.51×3期(含手续费24.51/期),¥556.98×6期(含手续费23.98/期),¥286.48×12期(含手续费19.98/期)");
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0VvINLWAIlE-AAiaWpiehPA078.png680x680.jpg,../images/Cgbj0VvINLWAIlE-AAiaWpiehPA078.png120x120.jpg,../images/Cgbj0VuhuQuAJDKmAADzJgGebvw964.png120x120.jpg,../images/Cgbj0FuhuQuAT6roAAI6irYzLPQ372.png120x120.jpg","魅族 15,魅族 M15,魅族 15 Plus,魅族 16th Plus,魅族 16th Plus,魅族 16 X","全网通公开版","{'汝窑白':'../images/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png80x80.png','晨曦金':'../images/Cgbj0FvINMCAYHwVAA9tzd_slxY751.png80x80.png','砚墨黑':'../images/Cgbj0VvINL-AGM20AAw4GirVtYA698.png80x80.png','云山蓝':'../images/Cgbj0FvQPgeAB8oRAANr82CwrrQ070.png80x80.png','烟晶紫':'../images/Cgbj0VvQPgqACwWfAAM1qdVP9Cw937.png80x80.png'}","6+64GB,6+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥599.33×3期(免手续费),¥299.66×6期(免手续费),¥161.06×12期(含手续费11.23/期)");
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0VusSJ6AH_bMAAimBuNV0-4121.png680x680.jpg,../images/Cgbj0FusSJ-AGjX5AAeYgVZv2Ic125.png120x120.jpg,../images/Cgbj0VusSJeAVPgvAAaYP_FCAkM778.png120x120.jpg,../images/Cgbj0FusSJaAAjWTAALGtSSMDPI480.png120x120.jpg",NULL,"全网通公开版","{'亮黑':'../images/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png80x80.png','玉白':'../images/Cgbj0FusSJyACGwcAAg0epdui5o951.png80x80.png','幻蓝':'../images/Cgbj0FusSL6AS8w5AAhRPgc1bQE955.png80x80.png'}","4+64GB,6+64GB,6+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥510.81×3期(含手续费11.48/期),¥260.89×6期(含手续费11.23/期),¥134.19×12期(含手续费9.36/期)");
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0FujaMOAQn-WAAS2GptULwE816.png680x680.jpg,../images/Cgbj0FuhxriAVngfAAerjGBi9Eo962.png120x120.jpg,../images/Cgbj0VuhxriANvRQAAfirX6v7lM957.png120x120.jpg,../images/Cgbj0VuhxreAAmH_AAN9EUdbnR4712.png120x120.jpg","魅族 V8 高配版,魅族 V8 标配版","全网通公开版","{'曜黑':'../images/Cgbj0FvQPnmABVZHAAM7MXAlUiQ783.png80x80.png','灰蓝':'../images/Cgbj0FvQPoCAVTZOAANhcY1jWUk925.png80x80.png','烟紫':'../images/Cgbj0FvS5yuAH9FEAAQYDOKm6Kc765.png80x80.png','焰红':'../images/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png80x80.png'}","4+32GB,4+64GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥340.66×3期(含手续费7.66/期),¥173.99×6期(含手续费7.49/期),¥89.49×12期(含手续费6.24/期)");
INSERT INTO m_phone_detail VALUES(NULL,"../images/Cgbj0VrcblGASw1bAAw5XLlyeCA103.png680x680.jpg,../images/Cgbj0Frcbk-AeEorAAXY_9lHYR4332.png120x120.jpg,../images/Cgbj0VrcbkiAaSirAAXItYvB5Xo133.png120x120.jpg,../images/Cgbj0Vrcbk6AYrRNAAHbf4qjn34636.png120x120.jpg","魅族 15,魅族 M15,魅族 15 Plus,魅族 16th,魅族 16th Plus,魅族 16 X","全网通公开版","{'雅金':'../images/Cgbj0VrcbmKALZ1BAA0NVqTeXpU942.png80x80.png','砚墨':'../images/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png80x80.png','黛蓝':'../images/Cgbj0FrcbnGANGRlAAzqchlSKjQ833.png80x80.png','汝窑白':'../images/Cgbj0FrcbkeAW38NAAjvsXhhyFE066.png80x80.png'}","4GB+64GB,4GB+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥510.81×3期(含手续费11.48/期),¥260.89×6期(含手续费11.23/期),¥134.19×12期(含手续费9.36/期)");

#用户登录表
CREATE TABLE m_login(
	mlId INT PRIMARY KEY AUTO_INCREMENT,
	mlPhone VARCHAR(20),
	mlPwd VARCHAR(6)
);

#购物车表
CREATE TABLE m_shopcart(
	msId INT PRIMARY KEY AUTO_INCREMENT,
	msDesc VARCHAR(200),
	msAfterSale VARCHAR(200),
	msMoney DECIMAL(7,2),
	msState VARCHAR(100),
	msOperation VARCHAR(200)
);

#首页导航条
CREATE TABLE m_navbar(
	title VARCHAR(20),
	url VARCHAR(64)

);

#插入首页导航条信息
INSERT INTO m_navbar VALUES("手机","phone.html?shoplist"),
("声学","phone.html?phonics"),
("配件","phone.html?accessories"),
("生活","phone.html?life"),
("Flyme","#"),
("服务","server.html"),
("专卖店","#"),
("社区","#"),
("APP下载","#");

#子集导航栏
CREATE TABLE m_subnav16(
	title VARCHAR(20),
	pic VARCHAR(100),
	mdesc VARCHAR(100)
);

#插入子集导航栏数据
INSERT INTO m_subnav16 VALUES("16th | 16th Plus","../images/kv_07d3d24.jpg,../images/kv-phone_1083aa4.png","魅族16旗舰手机"),
("首页","NULL","#"),
("概述","NULL","#"),
("性能","NULL","#"),
("相机","NULL","#"),
("参数","NULL","#");

#首页轮播图
CREATE TABLE slideshow(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	spic VARCHAR(64),
	url VARCHAR(64)
);
#插入轮播图数据
INSERT INTO slideshow VALUES(NULL,"../images/e0d3cc1b-507a-42af-b1b5-a9f4184398cf.jpg","https://hd.meizu.com/sale/chunjiebudayang.html?click=store_index_banner_1&click=click_store_index_banner_1"),
(NULL,"../images/c906a49c-2047-464e-a9df-a0b9a94754ef.jpg","https://detail.meizu.com/item/meizu16th?click=store_index_banner_2&click=click_store_index_banner_2"),
(NULL,"../images/08e3ea71-d225-4c80-bcef-9af70bd8a72e.jpg","https://detail.meizu.com/item/meizu16th.html?click=store_index_banner_3&click=click_store_index_banner_3"),
(NULL,"../images/2547eff6-b50c-44e2-a31e-9208c9518482.jpg","https://detail.meizu.com/item/meizu16x.html?click=store_index_banner_4&click=click_store_index_banner_4"),
(NULL,"../images/dc20a4aa-e83a-41d1-ba82-fb2061cb18fd.jpg","https://detail.meizu.com/item/meizux8.html?click=store_index_banner_5&click=click_store_index_banner_5"),
(NULL,"../images/6319e923-b33e-4c13-b9b1-0a2f95930df6.jpg","https://detail.meizu.com/item/meizuv8.html?click=store_index_banner_6&click=click_store_index_banner_6"),
(NULL,"../images/afff3cb7-3b9f-4f20-a287-3196d4f7ddeb.jpg","https://detail.meizu.com/item/meizu_g20.html?click=store_index_banner_7&click=click_store_index_banner_7");

CREATE TABLE second_nav(
	title VARCHAR(10),
	_href VARCHAR(50)

);

INSERT INTO second_nav VALUES("首页","meizu_index.html"),("概述","#"),("性能","#"),("相机","#"),("参数","#"),("常见问题","#");

CREATE TABLE index_section(
	title VARCHAR(20),
	_pic VARCHAR(500),
	price VARCHAR(10),
	type VARCHAR(100),
	network VARCHAR(10),
	color VARCHAR(50),
	memory VARCHAR(50),
	combo VARCHAR(50),
	stages VARCHAR(100)
);

INSERT INTO index_section VALUES("魅族 16th","../images/Cgbj0VtqgnWADjmlAAipoSE4bZM493.png680x680.jpg,../images/Cgbj0Ftqgm2AQo8kAALoIW3dU5E207.png680x680.jpg,../images/Cgbj0FtqgnSAEr3VAARgym8YDgE000.png680x680.jpg,../images/Cgbj0VtqgnSAO5g5AAIM3cZJ03Y881.png680x680.jpg","2498.00","魅族 M15,魅族 M15,魅族 15 Plus,魅族 16th,魅族 16th Plus,魅族 16 X","全网通公开版","静夜黑,远../images../images山白,极光蓝","6+64GB,6+128GB,8+128GB","官方标配,套餐二(省130元),套餐一(省129元),碎屏保套餐","¥851.81×3期(含手续费19.15/期),¥435.06×6期(含手续费18.73/期),¥223.77×12期(含手续费15.61/期)");

CREATE TABLE header_nav_child(
	hid INT,
	pic VARCHAR(100),
	title VARCHAR(50),
	price DECIMAL(7,2)
);

INSERT INTO header_nav_child VALUES(NULL,"../images/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png","魅族 Note8","999"),
(NULL,"../images/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png","魅族 16 X","1798"),
(NULL,"../images/Cgbj0VuhxsmABvIIAAMCZZS4ycg181.png","魅族 V8 高配版","898"),
(NULL,"../images/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png","魅族 X8","1498"),
(NULL,"../images/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png","魅族 16th","2498"),
(NULL,"../images/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png","魅族 15","1498"),
(NULL,"../images/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png","魅蓝 E3","1799"),
(NULL,"../images/Cgbj0VsM-kuAGYZmAAm_NQr8nSk674.png","魅蓝 6T","799");

#手机推荐表
CREATE TABLE m_phone(
	hid INT PRIMARY KEY AUTO_INCREMENT,
	mpFavorable VARCHAR(10),
	pic VARCHAR(200),
	mpColor VARCHAR(100),
	title VARCHAR(50),
	mpDesc VARCHAR(200),
	price DECIMAL(7,2)
);

#插入手机推荐表数据
INSERT INTO m_phone VALUES(NULL,"限时券","../images/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg","远山白,静夜黑,极光蓝","魅族 16th","限时领券更优惠 领完即止 | 骁龙845 屏下指纹",2498);
INSERT INTO m_phone VALUES(NULL,"限时券","../images/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png@480x480.jpg","静夜黑,远山白,极光蓝","魅族 16th Plus","限时领券更优惠 领完即止 | 骁龙845 屏下指纹",2998);
INSERT INTO m_phone VALUES(NULL,"热卖","../images/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@480x480.jpg","汝窑白,晨曦金,砚墨黑,云山蓝,烟晶紫","魅族 16 X","新年有新机 低至1798起 | 骁龙710 屏下指纹",1798);
INSERT INTO m_phone VALUES(NULL,"领券","../images/Cgbj0FusSJyACGwcAAg0epdui5o951.png@480x480.jpg","玉白,亮黑,幻蓝","魅族 X8","限时领券更优惠 | 骁龙710 人脸+指纹双解锁",1498);
INSERT INTO m_phone VALUES(NULL,"热卖","../images/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@480x480.jpg","曜黑,雅金,灰蓝,烟紫","魅族 V8 高配版","新年有新机 低至898 | 高清双摄 指纹+人脸双解锁",898);
INSERT INTO m_phone VALUES(NULL,"热卖","../images/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@480x480.jpg","曜黑,雅金,灰蓝,汝窑白","魅族 15","限时领券更优惠 | 骁龙660  2000万暗光双摄",1498);
INSERT INTO m_phone VALUES(NULL,"热卖","../images/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@480x480.jpg","曜黑,雅金,灰蓝,汝窑白","魅族 15","限时领券更优惠 | 骁龙660  2000万暗光双摄",1498);

CREATE TABLE phonics(
	hid INT,
	pic VARCHAR(100),
	title VARCHAR(50),
	price DECIMAL(7,2)
);
INSERT INTO phonics VALUES(NULL,"../images/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png","POP 真无线蓝牙耳机","449"),
(NULL,"../images/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png","魅族 Flow Bass 三单元耳机","399"),
(NULL,"../images/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png","魅族 HALO 激光蓝牙耳机","499"),
(NULL,"../images/1459849377-64075.png","魅族 EP51 蓝牙运动耳机","129"),
(NULL,"../images/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png","魅族 EP52 Lite 蓝牙耳机","129"),
(NULL,"../images/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png","魅族 LIVE 四单元动铁耳机","1099"),
(NULL,"../images/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png","魅族 EP-31 耳机","99"),
(NULL,"../images/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png","魅蓝 EP52 蓝牙耳机","199");

CREATE TABLE accessories(
	hid INT,
	pic VARCHAR(100),
	title VARCHAR(50),
	price DECIMAL(7,2)
);

INSERT INTO accessories VALUES(NULL,"../images/Cgbj0VugrWKAXgQoAALx033SuQ0691.png","魅族移动电源3","79"),
(NULL,"../images/1467170145-52479.png","快充电源适配器(UP0830S)","69"),
(NULL,"../images/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png","魅族无线充电器","79"),
(NULL,"../images/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png","魅族 Type-C 2.0数据线","49"),
(NULL,"../images/1458617159-29477.png","魅族 Micro USB 数据线","29"),
(NULL,"../images/CnQOjVef_HaAaD-bAAHXId4TWtA165.png","魅族 Type-C 金属数据线","39"),
(NULL,"../images/Cgbj0VwkSZKATjTlAAajD8PGNhs208.png","魅族 16th 高透保护膜","19"),
(NULL,"../images/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png","魅族 16th Plus 亲肤保护壳","29");

CREATE TABLE life(
	hid INT,
	pic VARCHAR(100),
	title VARCHAR(50),
	price DECIMAL(7,2)
);

INSERT INTO life VALUES(NULL,"../images/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png","魅族盒子 一键找回遥控器","399"),
(NULL,"../images/1465698264-58364.jpg","魅族路由器 极速版","99"),
(NULL,"../images/CnQOjViEff2AGm-aAADs7Q-pP_M820.png","魅族桌面多功能USB排插","89"),
(NULL,"../images/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png","Everyday 乐游系列 酷 MA 萌定制版","599"),
(NULL,"../images/Cix_s1g7l-yANQsqAAJSWz441uE109.jpg","魅蓝休闲旅行双肩包","199"),
(NULL,"../images/Cgbj0Vn6yW6AUlsRAAWrjB0SvJc768.png","魅蓝胸包","89"),
(NULL,"../images/Cgbj0Vmnd4mACpbbAAWpKisBvl4526.png","魅蓝数码收纳包","59"),
(NULL,"../images/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png","魅蓝旅行包","269");

CREATE TABLE meizuindex_video(
	title VARCHAR(20),
	bg_pic VARCHAR(100),
	hr_link VARCHAR(100),
	video VARCHAR(100)
);

INSERT INTO meizuindex_video VALUES("发布会回顾","../images/video1_0370604.png","#","#"),
("16 亮相视频","../images/video2_4a75be6.png","video_play.html","../videos/video2.mp4"),
("16 工艺视频","../images/video3_524a244.png","video_play.html","../videos/16_video1.mp4"),
("16 feature视频","../images/video4_5f6454c.png","video_play.html","../videos/feauture.mp4");

CREATE TABLE meizuindex_saleinfo(
	title VARCHAR(20),
	m_desc VARCHAR(50),
	price VARCHAR(200),
	plateform VARCHAR(100),
	phone_pic VARCHAR(100)
);

INSERT INTO meizuindex_saleinfo VALUES("魅族 16 旗舰手机","追求源于热爱","<em>16th</em><span><i>￥</i>2498 起</span><br/><em>16th Plus</em><span><i>￥</i>2998 起</span>","../images/platform_09fbc4a.jpg","../images/f98D65GHI4KLMNO2Q1ST0zWXYZaycwrp.jpg");

CREATE TABLE meizuindex_evaluate(
	title VARCHAR(10),
	content VARCHAR(200)
);

INSERT INTO meizuindex_evaluate VALUES("数字尾巴","由于 mEngine 的存在，这套 Super mBack 2.0 操作模拟出的振感反馈相当逼真，习惯了以前 mBack 按键的用户可能对此更容易接受；而全局手势操作则在体验上更为顺滑，并且不占用底部屏幕空间，沉浸感更强。"),
("PConline","魅族 16th 系列是非常纯粹的 J.Wong 式旗舰，无论是不跟风的非刘海对称式全面屏设计、屏下指纹识别，还是再次刷新纪录的全球最窄边框、mEngine 线性马达和 IMX380 传感器，都体现着黄章和魅族一直以来的追求和热爱。"),
("手机中国","魅族 16th 系列手机，通过超强的硬件实力以及全新的 AI 算法，让用户每一次按下快门都能留下一段精彩瞬间，而这就是手机拍照的魅力所在。"),
("驱动之家","屏幕指纹解锁被部署在魅族 16th 全系列，魅族没有将其视为机型产品线相区隔的隔板，让本就属于大众的美好技术走下神坛，拥抱所有人。"),
("新浪手机","不得不说，强劲的性能和良好的发热控制得宜于高通的旗舰处理器和 Flyme 7 系统的优化。二者的协作终于让魅族的旗舰手机有了它该有的样子。"),
("网易手机","对称，正是黄章想让魅族 16th 系列机型继承的重要属性。"),
("Zaker","魅族 16 用可以看得到的真机告诉你，窄边框从来都是做得到的，只是看你愿不愿意投入精力去为用户做。");

CREATE TABLE meizuindex_16pic(
	link_16pic VARCHAR(100)
);

INSERT INTO meizuindex_16pic VALUES("../images/proofs1_e8847e8.jpg"),
("../images/proofs2_e3ea0f1.jpg"),
("../images/proofs3_a9e2cfa.jpg"),
("../images/proofs4_c2d6c6d.jpg"),
("../images/proofs5_132474a.jpg"),
("../images/proofs6_83d4bf5.jpg"),
("../images/proofs7_02e5e3d.jpg"),
("../images/proofs8_9517974.jpg"),
("../images/proofs9_04aaabc.jpg"),
("../images/proofs10_0fba2d2.jpg"),
("../images/proofs11_0b77a3a.jpg"),
("../images/beauty-5_70a7e5b.jpg"),
("../images/beauty-1_272c10c.jpg"),
("../images/beauty-2_e50bd42.jpg"),
("../images/beauty-3_c7db8b5.jpg"),
("../images/beauty-4_ed3e4c7.jpg"),
("../images/accessory-bg_3fb41b2.jpg");

CREATE TABLE recommend(
	title VARCHAR(50),
	price DECIMAL(7,2),
	pic_link VARCHAR(100)
);

INSERT INTO recommend VALUES("魅族 16th",2498,"../images/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg"),
("POP 真无线蓝牙耳机",469,"../images/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png@480x480.jpg"),
("魅族 16 X",1798,"../images/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@480x480.jpg"),
("魅族蓝牙音频接收器",89,"../images/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@480x480.jpg");

CREATE TABLE server_question(
	title VARCHAR(20),
	content VARCHAR(200)
);

INSERT INTO server_question VALUES("购买帮助","支付方式,配送说明,付款帮助,订单查询,手机配件价格"),
("售后政策","7天无理由退货,15天换货保障,1年免费保修,配件售后政策"),
("系统相关","手机系统下载,MP3系统下载,应用商店,应用公式,手机资料迁移教程"),
("热门问题","MX6,魅蓝3s,魅蓝3,PRO6"),
("特色服务","VIP服务,远程支持,百城速达,2000+专卖店,500+服务中心");

