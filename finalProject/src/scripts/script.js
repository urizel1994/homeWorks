//элементы переключателя форм

const addSwitch = document.querySelector(".add-f");
const filterSwitch = document.querySelector(".filter-f");
const fSwitch = document.querySelector(".functional__switch-block");
const addForm = document.querySelector(".functional__forms");
const filterForm = document.querySelector(".filter-container");

//элементы переключателя времени суток
const dSwitch = document.querySelector(".d-switch");
const day = document.querySelector(".d-switch__day");
const night = document.querySelector(".d-switch__night");
const dayNightSwitch = document.querySelector(".d-switch__block");

//элементы дома
const house = document.querySelector(".house");
const roof = document.querySelector(".house__roof");
const floorWrap = document.querySelectorAll(".house__floor-wrap");
const balconOne = document.querySelectorAll(".house__balc-1");
const balcontwo = document.querySelectorAll(".house__balc-2");
const floors = Array.from(document.querySelectorAll(".house__floor")).reverse();
const foundation = document.querySelector(".house__foundation");
const residents = document.querySelectorAll(".house__resident");

//элементы формы добавления
const formAdd = document.forms[0];
const addBtn = document.querySelector(".add-form__add-button");
const resetBtn = document.querySelector(".add-form__reset-button");
const name = formAdd.elements.name;
const formFloor = formAdd.elements.floor;
const rooms = formAdd.elements.rooms;
const numOfPeople = formAdd.elements["num-of-people"];
var pets = formAdd.elements.pets;
var tv = formAdd.elements.tv;
var net = formAdd.elements.net;
const genderSwitch = document.querySelector(".add-form__gender-switch");
const m = document.querySelector(".m");
const w = document.querySelector(".w");

//элементы формы фильтрации
const formFilter = document.forms[1];
const filterGenderSwitch = document.querySelector(".filter-form__gender-switch");
const fM = document.querySelector(".fm");
const fW = document.querySelector(".fw");
const filterFormSwitch = document.querySelector(".filter__switch-block");
const filterRooms = formFilter.elements.rooms;
const filterNumOfPeople = formFilter.elements["num-of-people"];
const filterPets = formFilter.elements.pets;
const filterTv = formFilter.elements.tv;
const filterNet = formFilter.elements.net;
const filterFormFloor = formFilter.elements.floor;
const filterReset = document.querySelector(".reset-filter-button");

var gender;
var bg;
const functional = document.querySelector(".functional");
//элементы окна с информацией
const info = document.querySelector(".info");
const infoName = document.querySelector(".info__name-text");
const infoImg = document.querySelector(".info__name-img");
const infoValue = document.querySelectorAll(".info__value");
const infoClose = document.querySelector(".info__close");
//ПЕРЕКЛЮЧЕНИЕ ФОРМ
addSwitch.addEventListener("click", function(){
	this.style.color = "#fff"; 
	filterSwitch.style.color = "#000"; 
	fSwitch.style.transform = "translateX(0px)";
	addForm.style.transform = "translateX(0px)";
});

filterSwitch.addEventListener("click", function(){
	this.style.color = "#fff"; 
	addSwitch.style.color = "#000"; 
	fSwitch.style.transform = "translateX(220px)";
	addForm.style.transform = "translateX(-795px)";
});

//ПЕРЕКЛЮЧЕНИЕ ВРЕМЕНИ СУТОК

day.addEventListener("click", function(){
	dayNightSwitch.style.transform = "translateX(-83px)";
	night.style.opacity = "1";
	day.style.opacity = "0";
	dSwitch.style.background = "#393A59";
	roof.children[0].style.fill = "#4289FB";
	roof.children[1].style.fill = "#ACD7FA";
	floors[0].style.fill = "url(#Gradient-night1)";
	floors[1].style.fill = "url(#Gradient-night2)";
	floors[2].style.fill = "url(#Gradient-night3)";
	floors[3].style.fill = "url(#Gradient-night2)";
	floors[4].style.fill = "url(#Gradient-night1)";
	for(var i = 0; i < floors.length - 1; i++){
		balconOne[i].style.fill = "#4289FB";
		balcontwo[i].style.fill = "#6E7DFA";
	}	
	for(var i = 0; i < residents.length; i++){
		residents[i].style.stroke = "#3E3FC4";
	}
	foundation.children[0].style.fill = "#6E7DFA";
	for(var i = 1; i < foundation.children.length; i++){
		foundation.children[i].style.stroke = "#4747CD";
	}
});

night.addEventListener("click", function(){
	dayNightSwitch.style.transform = "translateX(0px)";
	day.style.opacity = "1";
	night.style.opacity = "0";
	dSwitch.style.background = "#ABCADE";
	roof.children[0].style.fill = "#4D2D19";
	roof.children[1].style.fill = "#613007";
	floors[0].style.fill = "url(#Gradient1)";
	floors[1].style.fill = "url(#Gradient2)";
	floors[2].style.fill = "url(#Gradient3)";
	floors[3].style.fill = "url(#Gradient2)";
	floors[4].style.fill = "url(#Gradient1)";
	for(var i = 0; i < floors.length - 1; i++){
		balconOne[i].style.fill = "#613007";
		balcontwo[i].style.fill = "#994404";
	}
	for(var i = 0; i < residents.length; i++){	
		residents[i].style.stroke = "#613007";
	}	
	foundation.children[0].style.fill = "#4D2D19";
	for(var i = 1; i < foundation.children.length; i++){
		foundation.children[i].style.stroke = "#613007";
	}
});

//клик по этажу и жителю

house.addEventListener("click", function(event){
	if(event.target.classList.contains("house__floor")){
		//event.target.style.fill = "red";
		var floors = Array.from(house.children).reverse();
		var floorEl = event.target.parentElement;
		formAdd.elements.floor.value = (floors.indexOf(floorEl));
	}
	if(event.target.classList.contains("house__resident")){
		var pets = "";
		var tv = "";
		var net = "";
		functional.style.display = "none";
		info.style.display = "flex";
		for(var i = 0; i < restsRever.length; i++){
			if(restsRever[i].indexOf(event.target) != -1){
				infoName.innerHTML = (base[i][restsRever[i].indexOf(event.target)].name);
				infoImg.style.background = "url(\"images/" + base[i][restsRever[i].indexOf(event.target)].gender + ".png\") no-repeat";
				infoImg.style.backgroundSize = "contain";
				if(base[i][restsRever[i].indexOf(event.target)].gender === "male"){
					infoValue[0].innerHTML = "Мужской";
				}	
				else if(base[i][restsRever[i].indexOf(event.target)].gender === "female"){
					infoValue[0].innerHTML = "Женский";
				}	
				infoValue[1].innerHTML = (+base[i][restsRever[i].indexOf(event.target)].floor);
				infoValue[2].innerHTML = (+base[i][restsRever[i].indexOf(event.target)].rooms);
				if(base[i][restsRever[i].indexOf(event.target)].pets === true){
					pets = "Домашние животные";
				}
				if(base[i][restsRever[i].indexOf(event.target)].tv === true){
					if(base[i][restsRever[i].indexOf(event.target)].pets === true){
						tv = ", ТВ";
					} else {
						tv = "ТВ";
					}
				}
				if(base[i][restsRever[i].indexOf(event.target)].net === true){
					if(base[i][restsRever[i].indexOf(event.target)].tv === true || base[i][restsRever[i].indexOf(event.target)].pets === true){
						net = ", Интернет";
					} else {
						net = "Интернет";
					}
				}
				infoValue[3].innerHTML = pets + tv + net; 
				infoValue[4].innerHTML = base[i][restsRever[i].indexOf(event.target)].numOfPeople;
			}
		}
	}
});

infoClose.addEventListener("click",function(){
	functional.style.display = "block";
	info.style.display = "none";
});
// Выбор пола
w.addEventListener("click", function(){
	this.style.color = "#fff"; 
	m.style.color = "#000"; 
	genderSwitch.style.transform = "translateX(220px)";
	gender = "female";
	bg = "url(#girl)";
});
m.addEventListener("click", function(){
	this.style.color = "#fff"; 
	w.style.color = "#000"; 
	genderSwitch.style.transform = "translateX(0px)";
	gender = "male";
	bg = "url(#boy)";
});

//клик по кнопке добавить 
if(JSON.parse(localStorage.getItem("house")) === null){
	var add = false;
} else {
	var add = true;
} 
var base;
var rests = Array.from(residents);

var restsD = [[],[],[],[],[]];
var c = 0;
var d = 1;
for(var i = 0; i < rests.length; i++){
	restsD[c].push(rests[i]);
	if(d === 3){
		d = 0;
		c++;
	}
	d++;
}
var restsRever = restsD.reverse();
if(add === true){
	base = JSON.parse(localStorage.getItem("house"));
	for(var i = 0; i < base.length; i++){
		for(var j = 0; j < base[i].length; j++){
			restsRever[i][j].style.fill = base[i][j].bg; 
		}
	}
} else {
	base = [[],[],[],[],[]];
}
addBtn.addEventListener("click",function(){
	if(add === true){
		base = JSON.parse(localStorage.getItem("house"));
	}
	var apr = {
		pets: false,
		tv: false,
		net: false,
		hide: false
	};
	apr.name = name.value;
	apr.floor = formFloor.value;
	for(var i = 0; i < numOfPeople.options.length; i++){
		if(numOfPeople.options[i].selected){
			apr.numOfPeople = numOfPeople.options[i].value;
		}
	}
	for(var i = 0; i < rooms.options.length; i++){
		if(rooms.options[i].selected){
			apr.rooms = rooms.options[i].value;
		}
	}
	apr.gender = gender;
	apr.bg = bg;
	if(pets.checked) {
		apr.pets = true;
	}
	if(tv.checked) {
		apr.tv = true;
	}
	if(net.checked) {
		apr.net = true;
	}
	if(base[apr.floor - 1].length < 3){
		base[apr.floor - 1].push(apr);
	}
	for(var i = 0; i < base.length; i++){
		for(var j = 0; j < base[i].length; j++){
			restsRever[i][j].style.fill = base[i][j].bg; 
		}
	}
	add = true;
	localStorage.setItem("house", JSON.stringify(base));
});

//сброс

/*
resetBtn.addEventListener("click", function(){
	localStorage.clear();
	base = [[],[],[],[],[]];
	localStorage.setItem("house", JSON.stringify(base));
});
*/
resetBtn.addEventListener("click", function(){
	gender = "";
	name.value = null;
	formFloor.value = null;
	rooms.value = 0;
	numOfPeople.value = 0;
	pets.checked = false;
	tv.checked = false;
	net.checked = false;
});
//фильтрация
function filter(){
	for(var i = 0; i < base.length;i++){
		for(var j = 0; j < base[i].length;j++){
			if(filterFormSwitch.style.transform === "translateX(220px)"){
				base[i][j].hide = false;
				if(base[i][j].gender === "male"){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}
				else if(base[i][j].gender !== "male" && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}
			if(filterFormSwitch.style.transform === "translateX(0px)"){
				base[i][j].hide = false;
				if(base[i][j].gender === "female"){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}
				else if(base[i][j].gender !== "female" && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}	
			}
			if(filterRooms.value){
				if(base[i][j].rooms !== filterRooms.value){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}
				else if(base[i][j].rooms === filterRooms.value && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}
			if(filterPets.checked){
				if(base[i][j].pets !== true){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}
				else {
					if(base[i][j].hide === false){
						restsRever[i][j].style.fill = base[i][j].bg;
					}
				}
			} 
			else if(!(filterPets.checked)){
				if(base[i][j].pets === false && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}
			if(filterTv.checked){
				if(base[i][j].tv === false){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}else {
					if(base[i][j].hide === false){
						restsRever[i][j].style.fill = base[i][j].bg;
					}
				}
			} 
			else if(!(filterTv.checked)){
				if(base[i][j].tv === false && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}
			if(filterNet.checked){
				if(base[i][j].net === false){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}else {
					if(base[i][j].hide === false){
						restsRever[i][j].style.fill = base[i][j].bg;
					}
				}
			} 
			else if(!(filterNet.checked)){
				if(base[i][j].net === false && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}
			if(filterFormFloor.value){
				if(base[i][j].floor !== filterFormFloor.value){
					restsRever[i][j].style.fill = "#994404";
					base[i][j].hide = true;
				}else if(base[i][j].floor !== filterFormFloor.value && base[i][j].hide === false){
					restsRever[i][j].style.fill = base[i][j].bg;
				}
			}		
		}
	}
}


fW.addEventListener("click", function(){
	this.style.color = "#fff"; 
	fM.style.color = "#000"; 
	filterFormSwitch.style.transform = "translateX(220px)";
	filter();
});
fM.addEventListener("click", function(){
	this.style.color = "#fff"; 
	fW.style.color = "#000"; 
	filterFormSwitch.style.transform = "translateX(0px)";
	filter();
});

filterRooms.addEventListener("change", filter);
filterPets.addEventListener("change", filter);
filterTv.addEventListener("change", filter);
filterNet.addEventListener("change", filter);
filterFormFloor.addEventListener("input",filter);

//сброс фильтра

filterReset.addEventListener("click",function(){
	for(var i = 0; i < base.length;i++){
		for(var j = 0; j < base[i].length;j++){
			restsRever[i][j].style.fill = base[i][j].bg;	
		}
	}
	fM.style.color = "#fff"; 
	fW.style.color = "#000"; 
	filterFormSwitch.style.transform = "translateX(0px)"
	filterRooms.value = 0;
	filterPets.checked = false;
	filterTv.checked = false;
	filterNet.checked = false;
	filterFormFloor.value = "";
});	
	