$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('.main-header').height();
		if ($(window).scrollTop() > navHeight) {
			$('.navBar').addClass('fixed');
			$('.nav-1').addClass('toleft');
		 }
		else {
			$('.navBar').removeClass('fixed');
			$('.nav-1').removeClass('toleft');
		 }
	});

});


