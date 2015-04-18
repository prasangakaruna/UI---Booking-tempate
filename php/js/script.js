// nav-bar
(function(){
	var n = '#nav', no = 'nav-open';
	
	$('#nav-menu').click(
		function (){
		if($(n).hasClass(no)){
			$(n).animate({height:0},500);	
			setTimeout(function (){
				$(n).removeClass(no).removeAttr('style');
			},320);
		}
		else{
			
			var newH = $(n).css('height','auto').height();
			$(n).height(0).animate({height:newH},500);
			
			setTimeout(function (){
				$(n).addClass(no).removeAttr('style');
			},320);
		}
	});
	
	// scroll top
	
	$("#back-top").hide();
	
	// fade in #back-top
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
})();

(function (){
	$('#animate-row,#animate-row1,#animate-row2,#animate-row3,#animate-row4,#animate-row5').addClass('animated');
	$('#animate-row,#animate-row1,#animate-row2,#animate-row3,#animate-row4,#animate-row5').on('mouseenter', function () {
		$(this).removeClass('infinite').addClass('fadeInLeft').removeClass('infinite');
		
	});	
	$('#animate-row,#animate-row1,#animate-row2,#animate-row3,#animate-row4,#animate-row5').on('mouseleave', function () {
		$(this).removeClass('bounceIn').addClass('infinite').removeClass('infinite');
		
	});	
	$('#animate-social1,#animate-social2,#animate-social3').addClass('animated');
	$('#animate-social1,#animate-social2,#animate-social3').on('mouseenter', function () {
		$(this).removeClass('infinite').addClass('pulse').removeClass('infinite');
		
	});	
	$('#animate-social1,#animate-social2,#animate-social3').on('mouseleave', function () {
		$(this).removeClass('pulse').addClass('infinite').removeClass('infinite');
	});	
})();


