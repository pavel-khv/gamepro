//sidebar в слайдере
let tabS = $('.tab-s');
tabS.on('click', function() {
	$(this).addClass('active'); //делаем пункт активный
	tabS.not($(this)).removeClass('active'); // у остальных убираем активный класс

	let dt = $(this).attr('data-tab'); //при клике достаем значение data-tab
	let di = $('.tab-info[data-info=' + dt + ']'); //получаем нужный элемент по data-info

	di.css('display', 'block'); //показываем нужный текст
	$('.tab-info').not(di).css('display', 'none'); // остальной текст скрываем
	$('.slider').css('background-image', 'url(img/photo-slider-' + dt + '.jpg)'); //смена бэкграунд картинки
});

//ткрытие и закрытие навигации левого бара
$('.navigation img').on('click', function() {
	$('.navigation ul').slideToggle(400);
});

//открытие и закрытие второго блока левого бара
$('.best-articles img').on('click', function() {
	$('.recon').slideToggle(400);
});