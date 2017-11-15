$(document).ready(function($) {

	/* Phone mask */
	$('.input.input_phone input').mask('+7 (999) 999-99-99');


	$('.panel__nav a').click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});

	new WOW().init();

	$('#fullpage').fullpage({
		fixedElements: '.panel__logo, .panel__nav, .panel__contacts',
		anchors: ['header', 'services', 'cases', 'team', 'other'],
		controlArrows: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		scrollBar: true,
		scrollOverflow: true,
		lockAnchors: true,
	});


	var panelLogo = $('.panel__logo'),
			panelNav = $('.panel__nav'),
			panelContacts = $('.panel__contacts')

	$(window).on('load resize scroll', function(event) {
		var widthWidth     = $(window).width(),
				scrollPosition = $(window).scrollTop();

		if (scrollPosition > 50) {
			panelLogo.hide();
			panelContacts.hide();
			panelNav.addClass('panel__nav_center');
		}
		if (scrollPosition < 50) {
			panelLogo.show();
			panelContacts.show();
			panelNav.removeClass('panel__nav_center');
		}
	});

	$('.slider__nav-item').click(function(event) {
		$('.slider__nav-item').removeClass('slider__nav-item_active');
		$(this).addClass('slider__nav-item_active')
	});

	$('.slider__nav-arrow_left').click(function(event) {
		$.fn.fullpage.moveSlideLeft();
		var parent = $(this).parents('.slider__nav'),
				active = parent.find('.slider__nav-item'),
				element = active.prev();
		active.removeClass('slider__nav-item_active');
		element.addClass('slider__nav-item_active');
	});
	$('.slider__nav-arrow_right').click(function(event) {
		$.fn.fullpage.moveSlideRight();
		var parent = $(this).parents('.slider__nav'),
				active = parent.find('.slider__nav-item_active'),
				element = active.next();
		active.removeClass('slider__nav-item_active');
		element.addClass('slider__nav-item_active');
	
	});

	$('.slider .fp-slidesNav li:nth-of-type(1) a').html('I');
	$('.slider .fp-slidesNav li:nth-of-type(2) a').html('ii');
	$('.slider .fp-slidesNav li:nth-of-type(3) a').html('iii');
	$('.slider .fp-slidesNav li:nth-of-type(4) a').html('iV');
	$('.slider .fp-slidesNav li:nth-of-type(5) a').html('V');
	$('.slider .fp-slidesNav li:nth-of-type(6) a').html('VI');
	$('.slider .fp-slidesNav li:nth-of-type(7) a').html('VII');

});