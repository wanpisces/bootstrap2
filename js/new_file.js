$(function(){
//	图片轮播
	$('.carousel').carousel({
		interval:4000
	});
	$(document).scroll(function(){
		var scollTop=$(document).scrollTop();
		if(scollTop>=10){
				$(".nav").css({background:'lightblue'});
		}else{
			$(".nav").css({background:''});
		}
		function rowDown(name1,name2){
			var top=$(name1).offset().top-200;
			if(scollTop>=top){	
				$(name2).addClass('topDown');
				if(name1=='#about'){
					$('#aboutTwo .aboutMargin').eq(0).animate({bottom:'0px'},500);
					setTimeout(function(){
						$('#aboutTwo .aboutMargin').eq(1).animate({bottom:'0px'},500);
					},200);
					setTimeout(function(){
						$('#aboutTwo .aboutMargin').eq(2).animate({bottom:'0px'},500);
					},400);
					setTimeout(function(){
						$('#aboutTwo .aboutMargin').eq(3).animate({bottom:'0px'},500);
					},600);
				}
				if(name1=='#sevices'){
					$('#sevices .aboutMargin').eq(0).animate({opacity:1},800);
					setTimeout(function(){
						$('#sevices .aboutMargin').eq(1).animate({opacity:1},800);
					},200);
					setTimeout(function(){
						$('#sevices .aboutMargin').eq(2).animate({opacity:1},800);
					},400);
					setTimeout(function(){
						$('#sevices .aboutMargin').eq(3).animate({opacity:1},800);
					},600);
				}
			}
			
		}
		rowDown('#about','#abuoutDown');
		rowDown('#sevices','#seviceDown');
		rowDown('#touch','#touchDown');
		
	});
	//监听
	$('body').scrollspy({ target: '#mainNav' });
//	$('form').
	
	$(document).ready(function() {
	    $('#upTop').click(function(){
	        $('html, body').animate({scrollTop:0}, 800);
	    });
});
});