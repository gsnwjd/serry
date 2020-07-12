
var clothes=$('.clothes_li');


var t1=new TimelineMax();
t1.to('.cyc',0.5,{height:2800,width:2800,borderRadius:1400,top:-900,left:-900})
	.addLabel("spin1")
	.to('.bd_l_el',2,{left:0},"spin1-=0.5")
	.to('.bd_m_el',2,{left:0},"spin1-=0.5")
	.to('.bd_r_el',2,{left:0},"spin1-=0.5")
	.to(".con2", 1, {left:0}, "spin1")
	.to('.l_el_bd',1,{left:0})
	.addLabel("spin2")
	.staggerTo(clothes, 0.4, {paddingLeft:60,opacity:1}, 0.2,"spin2-=0.7")
	.addLabel("spin3")
	.to('.r_el_line2',1,{left:290})
	.to('.r_el_line1',1,{top:355},"spin3")
	.addLabel("spin4")
	.to('.r_el_img',1,{height:400,width:400,left:100,top:150})
	.to('.img2',1,{height:600},"spin4")
	.to('.tx_1',0.6,{scale:0.75,opacity:1},"spin4+=0.4");
	


