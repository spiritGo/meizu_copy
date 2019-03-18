(function(){
    "use strict";
    var register = document.querySelector("#register");
    register.onclick = function(){
        var phone = document.querySelector("#phone");
        var pwd = document.querySelector("#pwd");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4&& this.status==200){
                console.log(this.responseText)
            }
        };
        xhr.open("post","/meizu/register");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var formdata = "mlPhone="+phone.value+"&mlPwd="+pwd.value;
        xhr.send(formdata);
    }
})();