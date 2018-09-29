var menuButton = document.querySelector(".header__menu-icon");
var menu = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
	menu.classList.toggle("active");
});