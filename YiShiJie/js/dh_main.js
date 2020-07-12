function el(){

function op(a,b){
var tl = new TimelineMax({repeat:1,repeatdelay:1, yoyo:true});
//添加一个动画
tl.add( TweenLite.to(a, 1, {opacity:0, ease:Sine.easeInOut}) );
tl.add( TweenLite.to(a, 0.6, {top:b, ease:Sine.easeInOut}) );
tl.add( TweenLite.to(a, 1, {opacity:1, ease:Sine.easeInOut}) );
}
op('.scroll',-63);
op('#foot_all',-20);

var t2 = new TimelineMax({repeat:1,repeatdelay:1 , yoyo:true});
t2.add( TweenLite.to('.scroll_img', 2.6, {top:-245, ease:Power2.easeInOut }) );
/*
var rule = CSSRulePlugin.getRule("#con"); //获取规则
var t3 = new TimelineMax({repeat:1, yoyo:true});
t3.add( TweenLite.to(rule, 3, {cssRule:{color:"#e9e4d1"}}));
*/

var t3=new TimelineMax({repeat:1,repeatdelay:1,yoyo:true});
t3.add(TweenLite.to('.bg1',2.6,{backgroundColor:'#e6efdc'}));

function le(c,d){
var t4=new TimelineMax({repeat:1,repeatdelay:1, yoyo:true});
t4.add(TweenLite.to(c,2.6,{delay:d,left:0,ease:Power4.easeInOut }));
}
le('.alpha1',0);
le('.alpha2',0);

le('.alpha3',2.6);
le('.alpha4',2.6);

function zoom(c,d){
var t6=new TimelineMax();
t6.add(TweenLite.to(c,1.3,{delay:d,width:417}));
}
zoom('.rimg1',0);
zoom('.rimg2',2.6);

var t5=new TimelineMax({repeat:1,repeatdelay:1, yoyo:true});
t5.add(TweenLite.to('.bd_r_all',2.6,{left:-580,delay:1.5,ease:Power4.easeInOut }));
}

setTimeout('el()',1000);
