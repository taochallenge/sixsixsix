/*
* @Author: taochallenge
* @Date:   2019-12-17 17:57:57
* @Last Modified by:   taochallenge
* @Last Modified time: 2019-12-21 20:50:58
*/
// 头部部分
var destination = document.getElementById("destination");
var desimg = document.getElementById("desimg");
var des = document.getElementById("des");
var vip = document.getElementsByClassName("top-wright-text");
destination.onmouseover = function(){
	desimg.src = "images/up.png";
	des.style.display = "block";
}
destination.onmouseout = function(){
	desimg.src = "images/down.png";
	des.style.display = "none";
}
des.onmouseover = function(){
	des.style.display = "block";
}
des.onmouseout = function(){
	des.style.display = "none";
}
var desList = des.children;
for(var i=0; i<desList.length; i++){
	desList[i].onmouseover = function(){
		this.style.color = "red";
	}
	desList[i].onmouseout = function(){
		this.style.color = "";
	}
}
for(var i=0; i<vip.length; i++){
	vip[i].onmouseover = function(){
		this.style.color = "red";
	}
	vip[i].onmouseout = function(){
		this.style.color = "";
	}
}
var mydd = document.getElementById("ll");
var myddList = document.getElementsByClassName("mydd");
var my = document.getElementById("mydd");
var llimg = document.getElementById("llimg");
mydd.onmouseover = function(){
	mydd.style.color = "red";
	my.style.display = "block";
	llimg.src = "images/up.png";
}
mydd.onmouseout = function(){
	mydd.style.color = "";
	my.style.display = "none";
	llimg.src = "images/down.png";
}
my.onmouseover = function(){
	my.style.display = "block";
}
my.onmouseout = function(){
	my.style.display = "none";
}
for(var i=0; i<myddList.length; i++){
	myddList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	myddList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var zeroget = document.getElementById("zeroget");
var mm = document.getElementById("mm");
var getList = document.getElementsByClassName("get");
var mmimg = document.getElementById("mmimg");
mm.onmouseover = function(){
	mm.style.color = "red";
	zeroget.style.display = "block";
	mmimg.src = "images/up.png";
}
mm.onmouseout = function(){
	mm.style.color = "";
	zeroget.style.display = "none";
	mmimg.src = "images/down.png";
}
zeroget.onmouseover = function(){
	zeroget.style.display = "block";
}
zeroget.onmouseout = function(){
	zeroget.style.display = "none";
}
for(var i=0; i<getList.length; i++){
	getList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	getList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var buy = document.getElementById("buy");
var nn = document.getElementById("nn");
var buyyList = document.getElementsByClassName("buyy");
var nnimg = document.getElementById("nnimg");
nn.onmouseover = function(){
	nn.style.color = "red";
	buy.style.display = "block";
	nnimg.src = "images/up.png";
}
nn.onmouseout = function(){
	nn.style.color = "";
	buy.style.display = "none";
	nnimg.src = "images/down.png";
}
buy.onmouseover = function(){
	buy.style.display = "block";
}
buy.onmouseout = function(){
	buy.style.display = "none";
}
for(var i=0; i<buyyList.length; i++){
	buyyList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	buyyList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var serve = document.getElementById("serve");
var serveList = document.getElementsByClassName("servelist");
var oo = document.getElementById("oo");
var ooimg = document.getElementById("ooimg");
oo.onmouseover = function(){
	oo.style.color = "red";
	serve.style.display = "block";
	ooimg.src = "images/up.png";
}
oo.onmouseout = function(){
	oo.style.color = "";
	serve.style.display = "none";
	ooimg.src = "images/down.png";
}
serve.onmouseover = function(){
	serve.style.display = "block";
}
serve.onmouseout = function(){
	serve.style.display = "none";
}
for(var i=0; i<serveList.length; i++){
	serveList[i].onmouseover = function(){
		this.style.backgroundColor = "white";
		this.style.color = "red";
	}
	serveList[i].onmouseout = function(){
		this.style.backgroundColor = "";
		this.style.color = "";
	}
}
var hotList = document.getElementsByClassName("hot");
for(var i=0; i<hotList.length; i++){
	hotList[i].onmouseover = function(){
		this.style.color = "red";
	}
	hotList[i].onmouseout = function(){
		this.style.color = "";
	}
}
var inputtext = document.getElementById("inputtext");
inputtext.onclick = function(){
	inputtext.value = "";
}
var market = document.getElementById("market");
var marketimg = document.getElementById("marketimg");
var markettxt = document.getElementById("markettxt");
market.onmouseover=function(){
	marketimg.src = "images/redmarket.png";
	market.style.backgroundColor = "rgb(246,246,246)";
	markettxt.style.color = "rgb(255,40,50)";
}
market.onmouseout=function(){
	marketimg.src = "images/whitemarket.png";
	market.style.backgroundColor = "rgb(255,40,50)";
	markettxt.style.color = "rgb(246,246,246)";
}
// 主体部分
var fixList = document.getElementsByClassName("fix");
fixList[1].onmouseover=function(){
	this.src = "images/11.png";
}
fixList[1].onmouseout=function(){
	this.src = "images/1.png";
}
fixList[2].onmouseover=function(){
	this.src = "images/22.png";
}
fixList[2].onmouseout=function(){
	this.src = "images/2.png";
}
fixList[3].onmouseover=function(){
	this.src = "images/33.png";
}
fixList[3].onmouseout=function(){
	this.src = "images/3.png";
}
fixList[4].onmouseover=function(){
	this.src = "images/44.png";
}
fixList[4].onmouseout=function(){
	this.src = "images/4.png";
}
fixList[5].onmouseover=function(){
	this.src = "images/55.png";
}
fixList[5].onmouseout=function(){
	this.src = "images/5.png";
}
fixList[6].onmouseover=function(){
	this.src = "images/66.png";
	fixList[10].style.display = "block"; 
}
fixList[6].onmouseout=function(){
	this.src = "images/6.png";
	fixList[10].style.display = "none";
}
fixList[7].onmouseover=function(){
	this.src = "images/77.png";
}
fixList[7].onmouseout=function(){
	this.src = "images/7.png";
}
fixList[8].onmouseover=function(){
	this.src = "images/88.png";
}
fixList[8].onmouseout=function(){
	this.src = "images/8.png";
}



var box = document.getElementById("box");
var oNavlist = document.getElementById("nav").children;
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var timer;
var isMoving = false;
var iHidden = 0,iShow = 0;//iHidden表示隐藏的下标，iShow表示显示的下标

// 轮播图
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

//点右箭头触发的函数
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	btnChange();
	animate(slider,{left:-796*index},function(){
		if(index == 9){
			slider.style.left = "-796px";
			index = 1;
		}
		isMoving = false;
	});	
}
//点左箭头触发的函数
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	btnChange();
	animate(slider,{left:-796*index},function(){
		if(index == 0){
			slider.style.left = -796*8 + "px";
			index = 8;
		}
		isMoving = false;
	});
}
var timer = setInterval(next,3000);

box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,2000);
}
right.onclick = next;
left.onclick = prev;

//小按钮点击
for(var i=0; i<oNavlist.length; i++){
	oNavlist[i].idx = i;
	oNavlist[i].onmouseover = function(){
		index = this.idx + 1;
		btnChange();
		animate(slider,{left:-796*index});
	}
}

//小按钮背景色切换
function btnChange(){
	for(var i=0; i<oNavlist.length; i++){			
		oNavlist[i].className = "";
	}
	if(index == 9){
		oNavlist[0].className = "active";
	}
	else if(index == 0){
		oNavlist[7].className = "active";
	}
	else{
		oNavlist[index-1].className = "active";
	}
}

var slide1List = document.getElementsByClassName("slide1");
var box2 = document.getElementById("box2");
var slider1 = document.getElementById("slider1");

function next1(){
	var now = parseInt(getStyle(slide1List[0],"left"));
	var speed = 1;
	if(now == -796){
		slide1List[0].style.left = 796 + "px";
	}
	else{
		slide1List[0].style.left = now - speed + "px";
	}
}
function next2(){
	var now1 = parseInt(getStyle(slide1List[1],"left"));
	var speed = 1;
	if(now1 == -796){
		slide1List[1].style.left = 796 + "px";
	}
	else{
		slide1List[1].style.left = now1 - speed + "px";
	}
}
var id1 = setInterval(next1,30);
var id2 = setInterval(next2,30);
slider1.onmouseover=function(){
	clearInterval(id1);
	clearInterval(id2);
}
slider1.onmouseout=function(){
	id1 = setInterval(next1,30);
	id2 = setInterval(next2,30);
}

// 消息向上滚动
var messagetxt = document.getElementById("messagetxt");
var mms = document.getElementById("mms");
var t;
auto();
function auto(){
	t = setInterval(function(){
		var now = parseInt(getStyle(messagetxt,"top"));
		var speed = 1;
		if(now==-245){
			messagetxt.style.top = 0 + "px";
		}
		else{
			messagetxt.style.top = now - speed + "px";
		}
	},30)
}
mms.onmouseover=function(){
	clearInterval(t);
}
mms.onmouseout=function(){
	auto();
}

// 活动
var actimg = document.getElementsByClassName("actimg");
actimg[0].onmouseover=function(){
	this.src = "images/a11.png";
}
actimg[0].onmouseout=function(){
	this.src = "images/a1.png";
}
actimg[1].onmouseover=function(){
	this.src = "images/a22.png";
}
actimg[1].onmouseout=function(){
	this.src = "images/a2.png";
}
actimg[2].onmouseover=function(){
	this.src = "images/a33.png";
}
actimg[2].onmouseout=function(){
	this.src = "images/a3.png";
}
actimg[3].onmouseover=function(){
	this.src = "images/a44.png";
}
actimg[3].onmouseout=function(){
	this.src = "images/a4.png";
}