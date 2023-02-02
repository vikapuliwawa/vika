$(".nachalo").css("border", "1px solid red"); /*выберет все div класса nachalo и обведет их в рамки красного цвета*/
$("menu li:even").css("font-style", "italic");	/*все четные строки(курсорный шрифт)*/
$("h2").css('border', 'solid 3px #696969'); 
$("h1").text("Brawl Stars!!")	/*изменения в штмл*/

$('table').click(function() {
	$(this).hide(2000) /*визуальный эффект*/
		});
$('h2').click(function(){
	alert('ты кликнул по заголовку ура');
});

$('img').slideUp(5000).slideDown(5000)
swal("добро пожаловать в brawl stars!!");

