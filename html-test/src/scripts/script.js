const menuBtn = document.querySelector(".header__menu-button");
const menu = document.querySelector(".menu");
const menuElem = document.querySelectorAll(".menuElem");
const popup = document.querySelector(".popup");
const button = document.querySelector(".button");
const cruiseImg = document.querySelectorAll(".cruiseImg");
const mask = document.querySelector(".mask");
var menuOpened = false;
var popupOpened = false;

const mainImg = document.querySelector(".mainImg");
const minImg = document.querySelectorAll(".minImg");
const imgOne = "images/gelen.jpg";
const imgTwo = "images/novorossiysk-211521_1920.jpg";
const imgThree = "images/sochi-2461968_1920.jpg";
const imgFour = "images/sea-1.jpg";
const imgFive = "images/lighthouse.jpg";

minImg[0].style.background = "url(" + imgTwo + ")";
minImg[1].style.background = "url(" + imgThree + ")";
minImg[2].style.background = "url(" + imgFour + ")";
minImg[3].style.background = "url(" + imgFive + ")";
mainImg.style.background = "url(" + imgOne + ")";


minImg[0].addEventListener("click", function(){
	let img = mainImg.style.background;
	mainImg.style.background = minImg[0].style.background;
	minImg[0].style.background = img;
});
minImg[1].addEventListener("click", function(){
	let img = mainImg.style.background;
	mainImg.style.background = minImg[1].style.background;
	minImg[1].style.background = img;
});
minImg[2].addEventListener("click", function(){
	let img = mainImg.style.background;
	mainImg.style.background = minImg[2].style.background;
	minImg[2].style.background = img;
});
minImg[3].addEventListener("click", function(){
	let img = mainImg.style.background;
	mainImg.style.background = minImg[3].style.background;
	minImg[3].style.background = img;
});

button.addEventListener("mousedown", function(){
	button.style.background = "#66ccff";
});
button.addEventListener("mouseup", function(){
	button.style.background = "#33c7fd";
});
button.addEventListener("mouseover", function(){
	button.style.background = "#0099ff";
});
button.addEventListener("mouseleave", function(){
	button.style.background = "#33c7fd";
});
menuBtn.addEventListener("click",function(){
	if(menuOpened === false){
		menu.style.display = "block";
		menuOpened = true;
		menu.style.animation = "showMenu 1s forwards";
		for(i = 0; i <= menuElem.length; i++){
		menuElem[i].style.display = "block";
		menuElem[i].style.animation = "showLink 2s forwards";
		};
	}
	else if(menuOpened === true){
		menu.style.display = "none";
		menuOpened = false;
	}	
});

cruiseImg[0].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "flex";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
cruiseImg[1].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "block";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
cruiseImg[2].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "block";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
cruiseImg[3].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "block";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
cruiseImg[4].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "block";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
cruiseImg[5].addEventListener("click",function(){
	if(popupOpened === false){
		popup.style.display = "block";
		mask.style.display = "block";
		mask.style.background = "rgba(0,0,0,.8)";
		popup.style.animation = "showLink .5s forwards";
		popupOpened = true;
	}
});
mask.addEventListener("click",function(){
	if(popupOpened === true){
		popup.style.display = "none";
		mask.style.display = "none";
		popupOpened = false;
	}
});
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
	item.addEventListener('click', function(e) {
    	e.preventDefault();
    	let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    	let scroller = setInterval(function() {
    	let scrollBy = coordY / framesCount;
		if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    		window.scrollBy(0, scrollBy);
		} 
    	else {
        	window.scrollTo(0, coordY);
        	clearInterval(scroller);
	}
}, animationTime / framesCount);
  });
});

