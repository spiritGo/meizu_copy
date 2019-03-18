// second_nav.js
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
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText);
		for (var d in data) {
			$a[d].innerHTML = data[d].title;
			$a[d].href = data[d]._href;
		}
	}
}

xhr.open("get", "/secondNav", true);
xhr.send();


//section 
var bigpic = document.querySelector(".preview .preview-booth img");
var smallpic = document.querySelectorAll(".preview .preview-thumb img");
var price = document.querySelector(".property .property-sell .price span");
var size = document.querySelector(".property-sibling .size dd");
var net = document.querySelector(".property-set .net dd");
var $colors = document.querySelector(".property-set .colors dd");
var $memorys = document.querySelector(".property-set .memorys dd");
var $combos = document.querySelector(".property-set .combos dd");
var $huabei = document.querySelector(".property-huabei dd");
var $buyCount = document.querySelector(".property-buy .property-buy-count input");
var $controls = document.querySelectorAll(".property-buy .property-buy-count a");

var section = new XMLHttpRequest();
section.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText);
		var pics = data[0]._pic.split(",");
		var pricetxt = data[0].price;
		bigpic.src = pics[0];

		for (var pic in pics) {
			smallpic[pic].src = pics[pic];
			smallpic[pic].onclick = function() {
				bigpic.src = this.src;
			}
		}
		price.innerHTML = pricetxt;

		// console.log(data)
		var types = data[0].type.split(",");
		var networks = data[0].network.split(",");
		var colors = data[0].color.split(",");
		var memorys = data[0].memory.split(",");
		var combos = data[0].combo.split(",");
		var huabei = data[0].stages.split(",");
		for (var type in types) {
			var a = document.createElement("a");
			a.innerHTML = types[type];
			size.appendChild(a);
		}
		createElement(networks, net);
		createElement(colors, $colors);
		createElement(memorys, $memorys);
		createElement(combos, $combos);
		createElement(huabei, $huabei);
	}
}

function createElement(array, parent) {
	for (var a in array) {
		var ele = document.createElement("a");
		ele.innerHTML = array[a];
		parent.appendChild(ele);
	}
}

section.open("get", "/indexSection", true);
section.send();

$controls[0].style.color = "#e0e0e0";
$controls[1].style.color = "#000000";
$buyCount.oninput = function() {
	if (this.value == 1) {
		$controls[0].style.color = "#e0e0e0";
		$controls[1].style.color = "#000000";
	} else if (this.value == 5) {
		$controls[0].style.color = "#000000";
		$controls[1].style.color = "#e0e0e0";
	} else {
		$controls[0].style.color = "#000000";
		$controls[1].style.color = "#000000";
	}
	console.log("oninput");
}

function decrease() {
	if ($buyCount.value <= 1) {
		$controls[0].style.color = "#e0e0e0";
		$controls[1].style.color = "#000000";
		return;
	}
	$buyCount.value -= 1;
}

function add() {
	if ($buyCount.value >= 5) {
		$controls[1].style.color = "#e0e0e0";
		$controls[0].style.color = "#000000";
		return;
	}
	$buyCount.value = parseInt($buyCount.value) + 1;
}

// recommend-list

var recommendlists = document.querySelectorAll(".detail-recommend .detail-recommend-hb .recommend-list li");

var recommend = new XMLHttpRequest();
recommend.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText);
		for (var rl in recommendlists) {
			if (rl == "length") return;
			var img = recommendlists[rl].querySelector("img");
			var title = recommendlists[rl].querySelector(".recommend-title");
			var desc = recommendlists[rl].querySelector(".recommend-desc");
			var price = recommendlists[rl].querySelector(".recommend-price");
			img.src = data[rl].pic.split(",")[0];
			title.innerHTML = data[rl].mpTitle;
			desc.innerHTML = data[rl].mpDesc;
			price.innerHTML = "<small>&yen;</small>" + data[rl].mpPrice;

		}
	}
}
recommend.open("get", "/recommend", true);
recommend.send();

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

