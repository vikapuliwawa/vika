alert("расчет вероятности выпадения хроматического персонажа");
var hrom=prompt("введите имя хроматического персонажа,которого вы хотите:" , "поле ввода");
var characters=["фэнг" , "карл" , "честер" , "гейл"];
for(var i = 0;i<characters.length; i++) {
	if (hrom==characters[i]) {
		document.write(characters[i] + '-хороший выбор');
	}
}
function raschet_veroiatnosti() {
	var veroiatnosti= document.getElementById("veroiatnosti").value;
	var nickname= document.getElementById("nickname").value;
	shans=100-veroiatnosti;
	document.getElementById("shans").value = shans;
}
var fang = {
	firstname: "fang",
	rang: "htomaticheski personag",
	stars:5,
	region: "bitva",
};
document.write("<br> персонаж по имени:" + fang.firstname + "имеет" + fang.stars +"звезд и является одним из" + fang.rang); 