//= require_tree .
//= require jquery

$(function() {
	var mobileNav = false;	
	$("#hamburger, #return").on("click", function() {
		$('nav').toggleClass('open');
		$('#hamburger').toggleClass('open');
		$('.mobile-menu').toggleClass('open');
	});

	$(".mobile-menu li.submenu > a").on("click", function() {
		$('.mobile-menu > ul').toggleClass('open');
		$(this).parent().toggleClass('open');
	});
});