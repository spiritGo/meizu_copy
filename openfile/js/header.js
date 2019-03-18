// header.js
var $a0 = document.querySelectorAll(".nav>ul>li>a");
var $li0 = document.querySelectorAll(".nav>ul>li");
var path = ["/navchild", "/phonics","/accessories","/life"];
const xhr0 = new XMLHttpRequest();
xhr0.onreadystatechange = function() {
	if (this.readyState == 4) {
		var html;
		var data = JSON.parse(this.responseText);
		for (var d in data) {
			$a0[d].innerHTML = data[d].title;
			$a0[d].href = data[d].url;
			$li0[d].index = d;
			if (d>3) continue;
			$li0[d].onmouseover = function() {
				var $nav_child = this.querySelector(".nav-child");
				if ($nav_child == null) return;
				$nav_child.style.visibility = "visible";
				if (this.index == -1) return;
				shownavchild(this, path[this.index]);
				this.index = -1;
			}

			$li0[d].onmouseout = function() {
				var $nav_child = this.querySelector(".nav-child");
				if ($nav_child == null) return;

				$nav_child.style.visibility = "hidden";
			}
		}
	}
}

xhr0.open("get", "/indexdata");
xhr0.send();

var appdwon = document.querySelector(".appdwon");
$li0[$li0.length-1].onmouseover = function (){
	appdwon.style.visibility = "visible";
}

$li0[$li0.length-1].onmouseout = function (){
	appdwon.style.visibility = "hidden";
}

var $a = document.querySelectorAll(".-ulist li a");
var $sub_a = document.querySelectorAll(".nav-sub li a");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText);
		// for (var d in data) {
		// 	$a[d].innerHTML = data[d].title;
		// 	$a[d].href = data[d]._href;
		// }

		for (var d in data) {
			if (d==data.length-1) return;
			$sub_a[d].innerHTML = data[d].title;
			$sub_a[d].href = data[d]._href;
		}
	}
}

xhr.open("get", "/secondNav", true);
xhr.send();

function shownavchild(li0, path) {
	var lis = li0.querySelectorAll(".nav-child ul>li");
	var navchild = new XMLHttpRequest();
	navchild.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var phone = JSON.parse(this.responseText);
			for (var li in lis) {
				if (li == "length") return;
				var img = lis[li].querySelector("img");
				var p = lis[li].querySelectorAll("p");
				img.src = phone[li].pic;
				p[0].innerHTML = phone[li].title;
				p[1].innerHTML = "<small>&yen;</small>" + phone[li].price;
				lis[li].style.opacity = .6;
				lis[li].onmouseover = function() {
					this.style.opacity = 1;
				}

				lis[li].onmouseout = function() {
					this.style.opacity = .6;
				}
			}

		}
	}
	navchild.open("get", path, true);
	navchild.send();
}

// var $a = document.querySelectorAll(".nav-sub li a");
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
// 	// if (this.readyState == 4 && this.status == 200) {
// 	// 	var data = JSON.parse(this.responseText);
// 	// 	for (var d in data) {
// 	// 		$a[d].innerHTML = data[d].title;
// 	// 		$a[d].href = data[d]._href;
// 	// 	}
// 	// }
// }

// xhr.open("get", "/secondNav", true);
// xhr.send();