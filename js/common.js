//sidebar в слайдере
var tabS = $('.tab-s');
tabS.click(function (){
	$(this).addClass('active');
	$('.tab-s').not($(this)).removeClass('active');
	var dt = $(this).attr('data-tab'); //при клике достаем значение data-tab
	if (dt == 3) {
		$('.gta-v').css('display', 'block');
		$('#slider').css('background-image', 'url(img/photo-slider-gta.jpg)');
		$('.tab-info').not($('.gta-v')).css('display', 'none');
	}
	else if(dt == 2) {
		$('.driver-sf').css('display', 'block');
		$('#slider').css('background-image', 'url(img/photo-slider-dr.jpg )');
		$('.tab-info').not($('.driver-sf')).css('display', 'none');
	}
	else if(dt == 1) {
		$('.bf-3').css('display', 'block');
		$('#slider').css('background-image', 'url(img/photo-slider-bf.jpg )');
		$('.tab-info').not($('.bf-3')).css('display', 'none');
	}
	else {
		$('.ghost-recon').css('display', 'block');
		$('#slider').css('background-image', 'url(img/photo-slider.jpg )');
		$('.tab-info').not($('.ghost-recon')).css('display', 'none');
	}
});

//активная ссылка навигационного меню
var tabNav = $('#nav>li>a');
tabNav.click(function(){
	$(this).addClass('active-menu');
	$('#nav>li>a').not($(this)).removeClass('active-menu');
});

//ткрытие и закрытие навигации левого бара
var leftNav = $('.navigation img');
leftNav.click(function(){
	$('.navigation ul').slideToggle(400);
});

//открытие и закрытие второго блока левого бара
var leftNav = $('.best-articles img');
leftNav.click(function(){
	$('.recon').slideToggle(400);
});

