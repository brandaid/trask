$(document).ready(function() {
	// Mobile Menu
	$("#toggle").on("click", function() {
	  	$(this).toggleClass("toggled");
	  	$("#nav-mobile").toggleClass("active");
	});
	
	$("#nav-mobile > li > a").on("click", function(){
		$(".sub-nav").removeClass("active");
		$("#nav-mobile > li > a ").removeClass("visited");
		$(this).siblings(".sub-nav").toggleClass("active");
		$(this).addClass("visited");
	});

	$(".drop-menu > a").on("click", function(){
		$(this).toggleClass("open");
		$(this).siblings(".submenu").toggleClass("active");
		 $(this).toggleClass('collapsed');
	});
 	// Product Filters
	$("#filter").on("click", function() {
	  	$("#filter_refine").toggleClass("active");
	  	$("#active-filters").toggleClass("active");
	});
	//SLIDER
	(function($){
		$(document).ready(function(){
			$('.owl-product-detail').owlCarousel({
					dots:true,
					nav: false,
					items: 1,
					margin: 0,
					loop:true,
					autoHeight: true
			});
		});
	})(jQuery);
});


var w;

function onresize (){

		w = $(window).width();

		if ($('#map-pin-1').length > 0){

			var pins = $('.stocklists__map--pin');
			var cards = $('.stocklist__map--card');

			var mapTotalWidth = $('.stocklists__map').css('width');
			mapTotalWidth = mapTotalWidth.replace('px','');

			var mapHalfWidth = mapTotalWidth/2;


			for(var i = 0; i<pins.length; i++){

				var top = $(pins[i]).css('top');
				var left = $(pins[i]).css('left');

				top = top.replace('px','');
				left = left.replace('px','');

				var boxWidth = $(cards[i]).css('width');
				var boxHeight = $(cards[i]).css('height');

				boxWidth = boxWidth.replace('px','');
				boxHeight = boxHeight.replace('px','');

				if(left < mapHalfWidth){
					boxWidth *= 0.1;
				}
				else{
					boxWidth *= 1;
				}

				boxHeight *= 1;


				top = top-boxHeight;
				left = left-boxWidth;


				top = top + 'px';
				left = left + 'px';

				$(cards[i]).css('top',top);
				$(cards[i]).css('left',left);

			}

		}


		if($('.login__box--container').length > 0){

			var loginBoxWidth = $('.login__box--container').outerWidth(true);
			var newPos = (w/2)-(loginBoxWidth/2);

			$('.login__box--container').css('left',newPos);
		}
}


	$(window).resize(onresize);

	$(document).ready(onresize);

	$(document).ready(function(){


		$('#map-card-1').fadeIn('fast');
		$('#map-pin-1').css('z-index','2');

		$('.close').on('click',function(){
			$(this).closest('.stocklist__map--card').fadeOut('fast');
		});

		$('.stocklists__map--pin').click(function(){



			var mapCard = $(this).next('.stocklist__map--card');

			if($(mapCard).css('display') === 'none'){
				$('.stocklists__map--pin').css('z-index','0');
				$(this).css('z-index','2');
				$('.stocklist__map--card').fadeOut('fast');
				$(mapCard).fadeIn('fast');
			}


		});

	});


//item closing behaviour
$('.close-item').on('click',function(){

	var item = $(this).parent();
	var divider = $(item).prev();

	$(item).fadeOut('slow');
	$(divider).fadeOut('slow');

});

//radio buttons on checkout-order summary behaviour
$('.rad-btn__input').on('click',function(){
	var btnContainer = $('.shipping-options__container');

	if ($(this).attr('checked') === 'checked'){

		$(this).removeAttr('checked');

		var afterSpan = $(this).next('checkmark');
		$(afterSpan).empty();

	}
	else{

			var self = $(this);

			var afterSpans = $(btnContainer).find('.checkmark');
			var buttons = $(btnContainer).find('.rad-btn__input');


			for(var i = 0; i < buttons.length; i++){

				$(buttons[i]).removeAttr('checked');
				$(afterSpans[i]).empty();

			}

			$(self).attr('checked','checked');
			var after = $(self).next();
			$(after[0]).append('<div></div>');
	}
});


$('.color-picker__outter').on('click',function(){


	if (!($(this).hasClass('color-picker__active'))){
		$('.color-picker__active').removeClass('color-picker__active');
		$(this).addClass('color-picker__active');
	}

});


$('.product-size').on('click',function(){

	if (!($(this).hasClass('product-size__active'))){
		$('.product-size__active').removeClass('product-size__active');
		$(this).addClass('product-size__active');
	}

});

$('.genre-pick').on('click',function(){

	if (!($(this).hasClass('genre-pick__active'))){
		$('.genre-pick__active').removeClass('genre-pick__active');
		$(this).addClass('genre-pick__active');
	}

});
// Shopping Bag 
$('.shop_bag').on('click',function(){

	$('.poppeable__box').each(function(){
		$(this).fadeOut('fast');
	});

	var cartPreview = $('.cart__preview--container');

	if( $(cartPreview).css('display') === 'none'){
		$(cartPreview).fadeIn('fast');
		$('.products__main-btn').each(function(){
			$(this).css('opacity','0.5');
			$(this).css('cursor','not-allowed');
			$(this).find('.products__main-btn--text').css('cursor','not-allowed');
		});

	}
	else{
		$(cartPreview).fadeOut('fast');
		$('.products__main-btn').each(function(){
			$(this).css('opacity','1');
			$(this).css('cursor','pointer');
			$(this).find('.products__main-btn--text').css('cursor','pointer');
		});
	}
});
// Log In
$('.header__login--li').on('click',function(){

	$('.poppeable__box').each(function(){
		$(this).fadeOut('fast');
	});

	var loginBox = $('.login__box--container');

	if( $(loginBox).css('display') === 'none'){
		$(loginBox).fadeIn('fast');


	}
	else{
		$(loginBox).fadeOut('fast');
	}
});

$('.close-login').on('click',function(){
	$('.login__box--container').fadeOut('fast');
});

// Search 

$('#search_desktop').on('click',function(){
	var searchInput = $('#search_input');
	if( $(searchInput).css('display') === 'none'){
		$(searchInput).fadeIn('fast');
	}
	else{
		$(searchInput).fadeOut('fast');
	}
});

$('#search_mobile').on('click',function(){
	var searchInputM = $('#search_input_mobile');
	if( $(searchInputM).css('display') === 'none'){
		$(searchInputM).fadeIn('fast');
	}
	else{
		$(searchInputM).fadeOut('fast');
	}
});