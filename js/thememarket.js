/*
 * Copyright (c) 2012 ThemeMarket
 * Author: Azamat Umarov 
 * This file is made for Onepage
*/

// -----------------------------------------------------  LOADING
window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}

jQuery(document).ready(function(){

// -----------------------------------------------------  NAV MOVEMENT
	$("nav").sticky({ topSpacing: 0});
	
// -----------------------------------------------------  FANCYBOX	
	$('.fancybox').fancybox();
	
	
// -----------------------------------------------------  PAGE SCROLL	
	$('ul.menu').onePageNav();
	$('#sa a').smoothScroll();
	
	$('a.enter').mouseenter(function(e) {
        $("a.enter").animate({padding:15+"px", opacity:0.7});
    });
	$('a.enter').mouseleave(function(e) {
        $("a.enter").animate({padding:10+"px", opacity:1});
    });
	
// -----------------------------------------------------  HEADER & SLIDER - HEIGHT
	function header() {
		var windowHeight = $(window).height();
		var windowHeight2 = $(window).height();
		var header = $("#header");
		var slider = $(".slider");
		var logo = $(".header-title");
		header.css("height",windowHeight+"px");
		slider.css("height",windowHeight+"px");
		logo.css("top",windowHeight/5+"px");

	}
	header();
	 
	$(window).resize(function(){
		header();
		navi();
	});

	
	$(window).bind('scroll', function(){
		navi();
	});
	
	$('#nav').hide();
	$('#nav ul').fadeOut();
	$('#nav ul.social').fadeOut();
	$('.foot-social').fadeOut();
	
	function navi(){
		if ($(window).scrollTop() >= $(window).height()){
			if(!$('#nav').is(':animated')) {
			
			$('#nav').stop(true,true).slideDown(500, function(){
				
				if($(window).width() < 767){
					$('#nav ul.menu').fadeIn();
					$('#nav ul.social').fadeOut(10);
					$('.foot-social').fadeIn();	
				}
				else{
					$('#nav ul').fadeIn();	
					$('.foot-social').fadeOut();
				}
			});
			
		}
	}else{
		if(!$('#nav').is(':animated')) {

				$('#nav ul').fadeOut(function(){
					$('#nav').stop(true,true).slideUp(500);	
				});	
		}
	}
} 
	
});


// -----------------------------------------------------  HEADER SLIDER
$(function($){
		
	$.supersized({
	
		// Functionality
		slide_interval          :   5000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : 'img/slider/1.jpg'},
											{image : 'img/slider/2.jpg'},
											{image : 'img/slider/3.jpg'},
											{image : 'img/slider/4.jpg'}
									]
		
	});
});	

// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	$.post('plugin/sendmail.php',$('#contactForm').serialize(), function(msg) {
		$(".alertMessage").html(msg);
	});
	// Hide previous response text
	$(msg).remove();
	// Show response message
	contactform.prepend(msg);
}	

// -----------------------------------------------------  GOOGLE MAP		
jQuery(document).ready(function(){ 
	var myLatlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
	  center: myLatlng,
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),  myOptions);
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title:"Click Me for more info!"
	});
	
	var infowindow = new google.maps.InfoWindow({});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("Write here some description"); //sets the content of your global infowindow to string "Tests: "
		infowindow.open(map,marker); //then opens the infowindow at the marker
	});
	marker.setMap(map);
});