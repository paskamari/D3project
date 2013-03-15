// JavaScript Document


//menu4taraf

$(document).ready(function(){
	var menu4 = $('.menu4taraf > li');
	menu4.click(function(){
		$(menu4).addClass("btnmenu");
		$(this).removeClass("btnmenu");
		$(menu4).removeClass("btnmenuselect");
		$(this).addClass("btnmenuselect");
	});
});
	

function mouseout() {
	document.getElementById('mon').className='cont';
}

//background image

function squares() {
	document.getElementById('bodysite').className='timeout squares';
}
function bgnoise() {
	document.getElementById('bodysite').className='timeout bgnoise';
}
function white_carbon() {
	document.getElementById('bodysite').className='timeout white_carbon';
}
function lghtmesh() {
	document.getElementById('bodysite').className='timeout lghtmesh';
}
function white_carbonfiber() {
	document.getElementById('bodysite').className='timeout white_carbonfiber';
}