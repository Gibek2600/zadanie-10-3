$(function(){

	var carouselList = $("#carousel ul");

	setInterval(changeSlide, 3000);

	function changeSlide() {
		carouselList.animate({'marginLeft':-600}, 2000, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");

			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
	}
});
