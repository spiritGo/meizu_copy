// phone.js

// 封装ajax
// path:路径接口
// fun:内调函数
function getdata(path, fun) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            fun(data);
        }
    };
    xhr.open("get", path, true);
    xhr.send();
}

function createEle(ele) {
    return document.createElement(ele);
}

function phoneColor(color) {
    switch (color) {
        case "玉白":
        case "远山白":
        case "汝窑白":
            color = "#f2f2f2";
            break;
        case "亮黑":
        case "静夜黑":
        case "砚墨黑":
        case "曜黑":
            color = "#2f3034";
            break;
        case "幻蓝":
        case "灰蓝":
            color = "#1d7ddf";
            break;
        case "极光蓝":
            color = "linear-gradient(120deg,#0088ea,#00b1ad)";
            break;
        case "晨曦金":
        case "雅金":
            color = "#e2cdb4";
            break;
        case "云山蓝":
            color = "#1c9df0";
            break;
        case "烟晶紫":
        case "烟紫":
            color = "#e9a5e3";
            break;
        case "焰红":
            color = "#d23640";
            break;
        case "玄武黑":
            color = "#818181";
            break;
    }
    return color;
}

function hotSaleColor(color) {
    switch (color) {
        case "直降":
            color = "linear-gradient(120deg,#ff910e,#ffd037)";
            break;
        case "领券":
        case "限时券":
            color = "linear-gradient(120deg,#ff3149,#ff64a6)";
            break;
        case "热卖":
            color = "linear-gradient(120deg,#2e74f6,#56bdf9)";
            break;
    }
    return color;
}

function foreach(array, fun) {
    for (var i = 0; i < array.length; i++) {
        fun(array[i])
    }
}

// 顶部导航条
getdata("/indexdata", (data) => {
    var as = document.querySelectorAll(".nav li a");
    for (var i = 0; i < as.length; i++) {
        as[i].innerHTML = data[i].title;
        as[i].href = data[i].url;
    }
});

function getUrl() {
    return "/meizuphone/" + window.location.search.substr(1);
}
console.log(getUrl());
getdata(getUrl(), (data) => {
    var ul = document.querySelector(".main-shop-list ul");
    for (var i = 0; i < data.length; i++) {
        var li = createEle("li");
        var phone_prev = createEle("img");
        var product = createEle("h3");
        var product_price = createEle("p");
        li.className = "bg-white";
        li.title = data[i].title;
        if (data[i].mpFavorable != undefined) {
            var hot_sale = createEle("p");
            var phone_color = createEle("div");
            var product_desc = createEle("p");
            hot_sale.innerHTML = data[i].mpFavorable;
            hot_sale.className = "item-hot-sale";
            hot_sale.style.backgroundImage = hotSaleColor(data[i].mpFavorable);
            phone_color.className = "phone-color";
            var colors = data[i].mpColor.split(",");
            for (var j = 0; j < data[i].mpColor.split(",").length; j++) {
                var a = createEle("a");
                a.style.background = phoneColor(colors[j]);
                a.title = colors[j];
                if (j == 0) {
                    a.className = "active";
                }
                a.onclick = function() {
                    this.className = "active";
                    foreach(this.parentNode.children, (ele) => {
                        if (ele != this) {
                            ele.className = "";
                        }
                    })
                }
                phone_color.append(a);
            }
            product_desc.className = "product-desc";
            product_desc.innerHTML = data[i].mpDesc;
            li.append(hot_sale);
            li.append(phone_color);
            li.append(product_desc);
        }
        phone_prev.className = "phone-prev";
        phone_prev.src = data[i].pic;
        product.className = "product font-300 font2rem";
        product.innerHTML = data[i].title;
        product_price.className = "product-price font2rem";
        var em = createEle("em");
        em.innerHTML = "&yen;";
        var span = createEle("span");
        span.innerHTML = data[i].price;
        product_price.append(em);
        product_price.append(span);

        li.append(phone_prev);
        li.append(product);
        li.append(product_price);
        ul.append(li);
    }
});

getdata("/meizuphone/recommendlist", (data) => {
    var product = document.querySelectorAll(".main-recommend-list .product");
    var product_price = document.querySelectorAll(".main-recommend-list .product-price span");
    var product_prev = document.querySelectorAll(".main-recommend-list .product-prev");
    for (var i = 0; i < product.length; i++) {
        product[i].innerHTML = data[i].title;
        product_price[i].innerHTML = data[i].price;
        product_prev[i].src = data[i].pic_link;
    }
});