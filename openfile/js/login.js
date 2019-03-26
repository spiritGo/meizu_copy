(function () {
    "use strict";
    var login = document.querySelector("#login");
    login.onclick = function () {
        var phone = document.querySelector("#phone");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText === "登陆成功") {
                    location.assign("http://127.0.0.1:8080/htmls/meizu_index.html");
                }
            }
        };
        xhr.open("post", "/meizu/login");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var formdata = "phone=" + phone.value;
        xhr.send(formdata);
    }
})();