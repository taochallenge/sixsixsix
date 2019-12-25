  var bigger = document.getElementById('bigger');
  var img1 = document.getElementById('img1');
  var Smig = document.getElementById('Simg');
  var slider = document.getElementById('slider');
  var img2 = document.getElementById('img2');
  var Bimg = document.getElementById('Bimg');
  var destination = document.getElementById("destination");
var desimg = document.getElementById("desimg");
var des = document.getElementById("des");
var downs = document.getElementById("downs");
var dess = document.getElementById("dess");
var dimg = document.getElementById("dimg");
var vip = document.getElementsByClassName("top-wright-text");
downs.onmouseover = function(){
  dimg.src = "images/up.png";
  dess.style.display = "block";
}
downs.onmouseout = function(){
   dimg.src = "images/down.png";
  dess.style.display = "none";
}

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
  img1.onmouseover = function(){
    img2.style.float="left";
    slider.style.display = "block";
    img2.style.display = "block";
  }
  img1.onmouseout = function (){
     img2.style.float="none";
      img2.style.display = "none";
     slider.style.display = "none";
  }
  img1.onmousemove = function(e){
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var biggerLeft = bigger.offsetLeft;
    var biggerTop = bigger.offsetTop;
    var sliderWidth = slider.offsetWidth;
    var sliderHeight = slider.offsetHeight;
    var sliderLeft = mouseX - biggerLeft -sliderWidth/2;
    var sliderTop = mouseY - biggerTop -sliderHeight/2;
    if(sliderLeft<0){
      sliderLeft=0;
    }
    if(sliderTop<0){
      sliderTop=0;
    }
    if(sliderLeft>200){
      sliderLeft=200;
    }
    if(sliderTop>200){
      sliderTop=200;
    }
    slider.style.left = sliderLeft +"px";
    slider.style.top = sliderTop +"px";
    if(sliderLeft<=0){
      //左侧临界值
      slider.style.left = 0;
    }
    else if(sliderLeft>=(img1.offsetWidth-slider.offsetWidth)){
      //右侧临界值
      slider.style.left = img1.offsetWidth-slider.offsetWidth + "px";
    }
    if(sliderTop<=0){
      //左侧临界值
      slider.style.top = 0;
    }
    else if(sliderTop>=(img1.offsetHeight-slider.offsetHeight)){
      //右侧临界值
      slider.style.top = img1.offsetHeight-slider.offsetHeight + "px";
    }

    var percent = Bimg.offsetWidth/Simg.offsetWidth;//设定大小比例
    //大图到左侧的距离是一个负值
    Bimg.style.left = (-sliderLeft * percent) + "px";
    Bimg.style.top = (-sliderTop * percent) + "px";
  }
      var imgs = document.getElementById('imgs');
    var color = document.getElementById('color');
    var pricechange= document.getElementById('pricechange');
    var change = document.getElementById('change');
    var btu11 = document.getElementById('btu11');
    var btu22 = document.getElementById('btu22');
    btu11.onmouseover=function(){
      btu11.src="images/btu11.PNG";
    }
    btu22.onmouseover=function(){
      btu22.src="images/btu22.PNG";
    }
    btu11.onmouseout=function(){
      btu11.src="images/btu1.PNG";
    }
    btu22.onmouseout=function(){
      btu22.src="images/btu2.PNG";
    }
    for (var i =4; i >= 0; i--) {
      imgs.children[i].onmouseover=function(){
        this.style.width="60px";
        this.style.height="60px";
        Simg.src=this.src;
        Bimg.src=this.src;
      }
       imgs.children[i].onmouseout=function(){
        this.style.width="50px";
        this.style.height="50px";
       }
    }
    for (var i =11; i >= 0; i--) {
      color.children[i].onmouseover=function(){
        this.style.border="1px solid red";
      }
     color.children[i].onmouseout=function(){
        this.style.border="1px solid #ccc";
      }      
      color.children[i].onclick=function(){
        Simg.src=this.src;
        Bimg.src=this.src;
        var price=5000+Math.round(Math.random()*100);
         pricechange.innerHTML= price; 
      }
    }
      var btn1 = document.getElementById('btn1');
     var btn2 = document.getElementById('btn2');

  　  btn2.onclick=  function (){
            //1、获取#num的value
            var value = document.getElementById("num").value;
            //2、将取出来的值做+1操作，再赋值给#num的value
            value = Number(value) + 1;
            document.getElementById("num").value = value;
        }

         btn1.onclick=function(){
            //1、获取#num的值
            var value = Number(document.getElementById("num").value);
            //2、判断#num的值是否小于等于1，如果小于等于1的话，则将值改为1
            //3、否则，可以实现 - 1 操作
            if(value <= 0){
                value = 0;
            }else{
                value -= 1;
            }
            //4、将 value 的值赋值给 #num
            document.getElementById("num").value = value;
        }

var sliders = document.getElementById('sliders');
var left = document.getElementById("lefts");
var right = document.getElementById("rights");
var slides = document.getElementsByClassName('slides');
var index = 1;

  //轮播下一张函数
  function next(){
    index++;
    animate(sliders,{left:-900 * index},function(){
      if(index === 3){
        sliders.style.left = "-900px";
        index = 1;
      }
    });
  }

  function prev(){
    index--;
    animate(sliders,{left:-900 * index},function(){
      if(index === 0){
        sliders.style.left = "-1800px";
        index = 3;
      }
    });
  }

  var timer = setInterval(next,5000);
//鼠标滑入清定时器
boxs.onmouseover = function(){
  animate(left,{opacity:50})
  animate(right,{opacity:50})
  clearInterval(timer);
}
//鼠标划出开定时器
boxs.onmouseout = function(){
  animate(left,{opacity:0})
  animate(right,{opacity:0})
  timer = setInterval(next,5000);
}
right.onclick = next;
left.onclick = prev;
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