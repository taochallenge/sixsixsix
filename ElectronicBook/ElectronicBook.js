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

/* ********************************************************************* */

// var oNavlists = document.getElementById('navs').children;
// var sliders = document.getElementById('sliders');
// var lefts= document.getElementById("lefts");
// var rights = document.getElementById("rights");
// var slides = document.getElementsByClassName('slides');
// var indexs = 1;
// 	//轮播下一张函数
// 	function nexts(){
// 		indexs++;
// 		navChanges();
// 		animate(sliders,{left:-680* indexs},function(){
// 			if(indexs === 4){
// 				sliders.style.left = "-675x";
// 				indexs = 1;
// 			}
// 		});
// 	}

// 	function prevs(){
// 		indexs--;
// 		navChanges();
// 		animate(sliders,{left:-680 * indexs},function(){
// 			if(indexs === 0){
// 				sliders.style.left = "-3375px";
// 				indexs = 4;
// 			}
// 		});
// 	}

// 	var timers = setInterval(nexts,3000);
// //鼠标滑入清定时器
// boxs.onmouseover = function(){
// 	animate(lefts,{opacity:50})
// 	animate(rights,{opacity:50})
// 	clearInterval(timers);
// }
// //鼠标划出开定时器
// boxs.onmouseout = function(){
// 	animate(lefts,{opacity:0})
// 	animate(rights,{opacity:0})
// 	timers = setInterval(nexts,3000);
// }
// rights.onclick = nexts;
// lefts.onclick = prevs;
// for(var is = 0;is < oNavlists.length;is++){
// 	oNavlists[is].idx = is;
// 	oNavlists[is].onclick = function(){
// 		indexs = this.idx + 1;
// 		navChanges();
// 		animate(sliders,{left:-680*indexs});
// 	}
// }

// 	//小按钮背景色切换
// 	function navChanges(){
// 		for(var is = 0;is<oNavlists.length;is++){
// 			oNavlists[is].id = '';
// 		}
// 		if(indexs === 4){
// 			oNavlists[0].id = 'actives';
// 		}else if(indexs===0){
// 			oNavlists[2].id = 'actives';
// 		}else{
// 			oNavlists[indexs-1].id = 'actives';
// 		}
		
// 	}
