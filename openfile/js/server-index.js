/**
 * Created by spirit on 2019/3/8.
 */

/**
 * 对ajax get请求的封装
 * @constructor
 */
function Ajax() {
    "use strict";
    this.get = function (url, fun) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                fun(data);
            }
        };
        xhr.open("get", url, true);
        xhr.send();
    }
}

const ajax = new Ajax();

ajax.get("/meizu/server", (data)=> {
    "use strict";
    var nav_a = document.querySelectorAll(".meizu-header-link a");
    nav_a.forEach((ele, index)=> {
        ele.innerHTML = data[index].title;
        ele.href = data[index].url;
    });
});

ajax.get("/meizu/server/question", (data)=> {
    "use strict";
    console.log(data);
    var questionList = document.getElementById("question-list");

    function fillDataSm(i, data, questionList) {
        var dl = document.createElement("dl");
        var dt = document.createElement("dt");
        dl.className = "text-center w-25 .font0-875rem";
        dt.innerHTML = data[i].title;
        dt.className = "text-center font-weight-normal";
        dl.appendChild(dt);
        var contents = data[i].content.split(",");
        for (var j = 0; j < contents.length; j++) {
            var dd = document.createElement("dd");
            dd.innerHTML = contents[j];
            dl.appendChild(dd);
        }
        questionList.appendChild(dl);
    }

    function fillData(i, data) {
        var collapse = document.createElement("div");
        collapse.className = "card w-100  bg-transparent border-left-0 border-right-0 border-top-0";
        var h5 = document.createElement("h5");
        h5.className = "card-header bg-transparent border-0";
        h5.setAttribute("data-toggle", "collapse");
        h5.setAttribute("data-target", "#collapse" + i);
        h5.innerHTML = data[i].title;
        var div = document.createElement("div");
        div.className = "collapse";
        div.id = "collapse" + i;
        div.setAttribute("data-parent", ".question");
        var ul = document.createElement("ul");
        ul.className = "card-body";
        var contents = data[i].content.split(",");
        for (var j = 0; j < contents.length; j++) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerHTML = contents[j];
            a.className = "card-link";
            a.href = "#";
            li.appendChild(a);
            ul.appendChild(li);
        }
        collapse.appendChild(h5);
        div.appendChild(ul);
        collapse.appendChild(div);
        document.querySelector(".question-list-xs").appendChild(collapse);
    }

    for (var i = 0; i < data.length; i++) {
        fillDataSm(i, data, questionList);
        fillData(i, data);
    }

});

(function () {
    "use strict";
    var swiper = new Swiper(".swiper-container", {
        pagination: {
            el: '.swiper-pagination'
        }
    })
})();


