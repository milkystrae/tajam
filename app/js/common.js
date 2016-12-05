$(document).ready(function() {

	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".hidden-mnu").slideToggle();
	return false;
});

 
	$("#header-carousel").owlCarousel({
 
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 300,
		singleItem:true,
		autoPlay: true
 
		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
 
	});
	if ($(window).width() > 1200) {
			$('.video-content').css('visibility', 'hidden');
     }
 //$('.video-content').css('visibility', 'hidden')
 $('.play-button').click(function(ev){
	$(this).hide();
	$('.video-story').hide();
	$('.video-content').css('visibility', 'visible');
	$('#video')[0].src += "&autoplay=1";;
	ev.preventDefault();
 });
});
