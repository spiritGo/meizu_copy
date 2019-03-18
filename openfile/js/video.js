// video.js
var video = document.querySelector("video");
var source = document.querySelector("video source");
var src = window.location.search.substr(1);
source.src = src.split("=")[1];
video.load();