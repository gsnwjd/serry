
/*

var $overflow = $("#overflow");
var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];

//初始化每个块的颜色和位置为一排
TweenMax.set(".box", {
  backgroundColor:function(i) {
    return colors[i % colors.length];
  },
  x:function(i) {
    return i * 50;
  }
});


TweenMax.to(".box", 5, {
  ease: Linear.easeNone,
  x: "+=500", //将每个块向右移动500px
  modifiers: {
    x: function(x) {
      return x % 500; //强制x值在0和500之间
    }
  },
  repeat: -1
});


//toggle overflow
$overflow.on("change", applyOverflow);

function applyOverflow() {
  if($overflow.prop("checked")){
    TweenLite.set(".wrapper", {overflow:"visible"});
  }else {
    TweenLite.set(".wrapper", {overflow:"hidden"});
  }
}

*/


function el(){
  TweenLite.to(window, 2, {scrollTo:600,autoKill:false});
}

