// meizu_index.js
function getDataFromSql(interface, fun) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            fun(JSON.parse(this.responseText));
        }
    }

    xhr.open("get", interface, true);
    xhr.send();
}

function siblings(ele) {
    var s = [];
    var children = ele.parentNode.children;
    for (var i = 0; i < children.length; i++) {
        if (children[i] != ele) s.push(children[i]);
    }
    return s;
}

function removeClass(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i].className = ""
	}
}

getDataFromSql("/meizuindex/videos", (data) => {
    var a = document.querySelectorAll(".video ul a");
    var p = document.querySelectorAll(".video ul p");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundImage = "url(" + data[i].bg_pic + ")";
        a[i].href = data[i].hr_link+"?video="+data[i].video;
        p[i].innerHTML = data[i].title;
    }
});

getDataFromSql("/meizuindex/saleinfo", (data) => {
    var saleImage = document.querySelector(".sale-info .sale-img img");
    var p = document.querySelectorAll(".sale-info .sale-desc>p");
    var h1 = document.querySelector(".sale-info .sale-desc>h1");
    var platform = document.querySelector(".sale-info .platform p img");
    var d = data[0];
    saleImage.src = d.phone_pic;
    p[0].innerHTML = d.title;
    p[1].innerHTML = d.price;
    h1.innerHTML = d.m_desc;
    platform.src = d.plateform;
});

getDataFromSql("/meizuindex/evaluate", (data) => {
    var lis = document.querySelectorAll(".media ul li");
    var content = document.querySelector(".media .content");
    var by = document.querySelector(".media .by span");
    content.innerHTML = data[0].content;
    by.innerHTML = data[0].title;
    for (var i = 0; i < data.length; i++) {
        lis[i].index = i;
        lis[i].innerHTML = data[i].title;
        lis[i].onclick = function() {
            content.innerHTML = data[this.index].content;
            by.innerHTML = data[this.index].title;
            this.className = "active";
            for (var i = 0; i < siblings(this).length; i++) {
                siblings(this)[i].className = "";
            }
        }
    }
});

getDataFromSql("/meizuindex/16pic", (data) => {
    var ul = document.querySelector(".meizu-pic .pic");
    var more = document.querySelector(".meizu-pic .more");
    for (var i = 0; i < 11; i++) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = data[i].link_16pic;
        li.appendChild(img);
        ul.appendChild(li);
    }

    more.onclick = function() {
        var lis = ul.querySelectorAll("li");
        for (var i = 4; i < lis.length; i++) {
            lis[i].style.display = "list-item";
        }
        this.style.display = "none";
    }

    var beautyUl = document.querySelector(".beauty-section .beauty-bg");
    var beautyli = beautyUl.querySelectorAll("li");
    var left = document.querySelector(".beauty-section .left");
    var right = document.querySelector(".beauty-section .right");
    for (var i = 11; i < data.length - 1; i++) {
        var index = i - 11;
        beautyli[index].style.backgroundImage = "url(" + data[i].link_16pic + ")";
        // beautyli[index].style.left = index * 100 + "%";

    }

    var indexCircle = document.querySelectorAll(".beauty-section .index li");
    indexCircle[0].className = "indexActive";

    var p_left = 0;
    right.onclick = function() {
        p_left -= 100;
        if (p_left <= -500) p_left = 0;
        beautyUl.style.marginLeft = p_left + "%";
        removeClass(indexCircle);
        indexCircle[Math.abs(p_left/100)].className = "indexActive";

    }

    left.onclick = function(){
    	p_left += 100;
        if (p_left > 0) p_left = -400;
        beautyUl.style.marginLeft = p_left + "%";
        removeClass(indexCircle);
        indexCircle[Math.abs(p_left/100)].className = "indexActive";
    }
});