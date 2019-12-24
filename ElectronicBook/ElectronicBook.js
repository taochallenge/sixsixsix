/*
* @Author: taochallenge
* @Date:   2019-12-17 18:17:56
* @Last Modified by:   taochallenge
* @Last Modified time: 2019-12-17 18:17:56
*/

var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById("left");
var right = document.getElementById("right");
var slide = document.getElementsByClassName('slide');
var index = 1;
	//轮播下一张函数
	function next(){
		index++;
		navChange();
		animate(slider,{left:-675* index},function(){
			if(index === 6){
				slider.style.left = "-675x";
				index = 1;
			}
		});
	}

	function prev(){
		index--;
		navChange();
		animate(slider,{left:-675 * index},function(){
			if(index === 0){
				slider.style.left = "-3375px";
				index = 5;
			}
		});
	}

	var timer = setInterval(next,3000);
//鼠标滑入清定时器
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer);
}
//鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
for(var i = 0;i < oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-675*index});
	}
}

	//小按钮背景色切换
	function navChange(){
		for(var i = 0;i<oNavlist.length;i++){
			oNavlist[i].id = '';
		}
		if(index === 6){
			oNavlist[0].id = 'active';
		}else if(index===0){
			oNavlist[4].id = 'active';
		}else{
			oNavlist[index-1].id = 'active';
		}
		
	}
/********************************************************************/
var btn3=document.getElementById("btn3");
var btn2=document.getElementById("btn1");
btn2.onmouseover=function(){
	this.style.backgroundColor="#ccffff";
}
btn2.onmouseout=function(){
	this.style.backgroundColor="#fff";
}
btn2.onclick=function(){
	this.style.backgroundColor="#bbb";
	alert("请登录微信公众号参与活动");
}
btn3.onclick=function(){
	prompt("请输入要反馈的内容：");
	alert("反馈成功");
}
btn3.onmouseover=function(){
	this.style.backgroundColor="#ccffff";
}
btn3.onmouseout=function(){
	this.style.backgroundColor="#fff";
}
var a=document.getElementsByTagName("a");
for(var i=0;i<a.length-1;i++){
	a[i].onclick=function(){
		this.style.color="#ccffff";
	}
}

/**************************************************************************************/
var weixins=document.getElementById("weixins");
var weixin=document.getElementById("weixin");
weixins.onmouseover=function(){
	this.src="images/weixin.png";
}
weixins.onmouseout=function(){
	this.src="images/weixin.JPG";
}
