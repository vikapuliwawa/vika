alert(navigator.userAgent); /*определение клиента*/
if (confirm("хотите узнать когда состоялся глобальный релиз brawl stars?")) /*предоставление выбора*/
{
	alert("глобальный релиз состоялся 12 декабря 2018 года");
}

document.getElementById("spisokpersov").style.border = " solid #FA8072"; /*обтекание красным цветом(получаем обьект на старнице по id)*/
document.getElementById("strokadva").style.background = "#FFFACD"; /*обтекание*/

function buttonClick(elem) {
	elem.value='фэнг-мастер скоростного пинка.во время основной атаки у него с ноги слетает кроссовок,он является хроматическим бойцом класса "разрушитель"';
}

function sortirovkapersov(){
    ul = document.getElementsByClassName("strokapersov"); 
    var pers=new Array(4);
    for(var i=0;i<pers.length;i++){
        pers[i] = ul[i].innerHTML;		/*показывает содержимое элементов*/
    } 
    pers.sort(); 
    for(var i=0;i<pers.length;i++){ 
        ul[i].innerHTML = pers[i]; 
	}
}