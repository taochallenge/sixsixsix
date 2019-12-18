
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
			// console.log(cur);
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
	






























	// function getStyle(obj, attr){
	// 	if(obj.currentStyle){
	// 		return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr]=0 : obj.currentStyle[attr];
	// 	} else {
	// 		return isNaN(parseFloat(getComputedStyle(obj, null)[attr])) ? obj.style[attr]=0 : getComputedStyle(obj, null)[attr];
	// 	}
	// }
	
	// function animate(obj,json,callback){
	// 	if(obj.isMoving){
	// 		return;
	// 	}else{
	// 		obj.isMoving = true;
	// 	}
	// 	var a=0,b=0;
	// 	for(var attr in json){
	// 		a++;
	// 		(function(attr){
	// 			var timer = setInterval(function(){
	// 				var now = 0;
	// 				if(attr == 'opacity'){
	// 					now = parseInt( parseFloat(getStyle(obj,attr)) * 100 );
	// 				}else{
	// 					now = parseInt( getStyle(obj,attr) );
	// 				}
	// 				var speed = ( json[attr] - now ) / 6;
	// 				speed = speed>0?Math.ceil(speed):Math.floor(speed);
	// 				if(now == json[attr]){
	// 					clearInterval(timer);
	// 					b++;
	// 					if(a==b){
	// 						callback&&callback();
	// 						obj.isMoving = false;
	// 					}
	// 				}else{
	// 					if(attr == 'opacity'){
	// 						obj.style.opacity = ( now + speed ) / 100;
	// 					}else{
	// 						obj.style[attr] = now + speed + 'px';
	// 					}
	// 				}
	// 			},30);
	// 		})(attr);
			
	// 	}
	// }
