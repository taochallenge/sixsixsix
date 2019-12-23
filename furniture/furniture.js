/*
* @Author: taochallenge
* @Date:   2019-12-17 18:14:29
* @Last Modified by:   taochallenge
* @Last Modified time: 2019-12-17 18:14:29
*/
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

function change(){
	var b = confirm("您要切换成护眼模式吗？");
	if(b){
		var body = document.getElementsByTagName("body");
		body[0].style.backgroundColor = "#e3c887";
	}
}
window.onload = function(){
	setTimeout(change,1200);
}
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
//顶部
var zindex = document.getElementsByClassName("zindex");
zindex[0].onclick = function(s){
	animate(this,{top:40,left:50,width:1600,height:500});
	this.onclick = function(){
		animate(this,{width:800,height:300,top:230,left:400});
	}
}
zindex[1].onclick = function(){
	this.style.zIndex="3";
	zindex[0].style.zIndex="0";
	animate(this,{top:200,left:50,width:1600,height:500});
	this.onclick = function(){
		animate(this,{width:800,height:300,top:220,left:870});
		zindex[0].style.zIndex="3";
		this.style.zIndex="0";
	}
}
zindex[2].onclick = function(){
	zindex[0].style.zIndex="0";
	this.style.zIndex="3";
	animate(this,{top:200,left:50,width:1600,height:500});
	this.onclick = function(){
		animate(this,{top:220,left:10,width:800,height:300});
		zindex[0].style.zIndex="3";
		this.style.zIndex="0";
	}
}

//按钮
var homenav = document.getElementById("home_nav");
	var erweima = document.getElementById("erweima");
	var timebig = document.getElementsByClassName("time_big");
 	var goodsbig = document.getElementsByClassName("goods_big");
	erweima.onmouseover = function(){
		erweima.style.width = "200px";
		erweima.style.height = "200px";
	}
	erweima.onmouseout = function(){
		erweima.style.width = "50px";
		erweima.style.height = "50px";
	}
	for(var i =0;i<timebig.length;++i){
		timebig[i].onmouseover = function(){
			this.style.width="240px";
			this.style.height="260px";
		}
		timebig[i].onmouseout = function(){
			this.style.width = "230px";
			this.style.height="250px";
		}
	}
	for(var i =0;i<goodsbig.length;++i){
		goodsbig[i].onmouseover = function(){
			this.style.width="240px";
			this.style.height="260px";
		}
		goodsbig[i].onmouseout = function(){
			this.style.width = "230px";
			this.style.height="250px";
		}
	}
	var gotop = document.getElementById("gotop");
	gotop.onclick = function(){
		window.location.hash="#top-wrap";
	}

	var countdown = document.getElementsByClassName("countdown");
	var maxtime = 1000*60;
	function count(){
		if(maxtime>=0){
			var hours = Math.floor(maxtime/3600);
			var minutes = Math.floor((maxtime-hours*3600)/60);
			var seconds = Math.floor((maxtime-hours*3600)%60); 
			var mesg = "还剩："+hours+"小时"+minutes+"分钟"+seconds+"秒";
			for(var i=0;i<countdown.length;++i){
				countdown[i].innerHTML = mesg;
			}
			
			--maxtime;
		}
	}
	countdown[0] = setInterval("count()",1000);
	var tali_1 = document.getElementsByClassName("tali_1");
	var tabh_0 = document.getElementsByClassName("tabh_0");
	
	for(var i=0;i<tabh_0.length;++i){
		tabh_0[i].onmouseover = function(){
			var str = this.id.slice(1);
			for(var j=0;j<tali_1.length;++j){
				this.style.backgroundColor="pink";
				if(str==j){
					tali_1[j].style.display = "block";
				}
				else{
					tali_1[j].style.display = "none";
				}
			}
		}
		tabh_0[i].onmouseout=function(){
			this.style.backgroundColor="#E58308"
		}
	}
var code = document.getElementById("code");
var moveimg = document.createElement("img");
moveimg.src = "images/erweima.jpg"
code.onmouseover = function(){
	code.appendChild(moveimg);
	animate(moveimg,{left:400,width:500,height:500});
}
moveimg.onclick = function(){
	animate(moveimg,{left:1400,width:0,height:0});	
}

