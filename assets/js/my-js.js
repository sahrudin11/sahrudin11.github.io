$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			568: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
		
	$(window).scroll(function(){		
		if($(this).scrollTop() > 300){
			$('nav').addClass('shadow');
		}else{
			$('nav').removeClass('shadow');
		}
	});


	const btnContainer = document.querySelector(".navbar-nav");

	const btns = btnContainer.getElementsByClassName("nav-link");

	for (let i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	    const current = document.getElementsByClassName("active");
    	current[0].className = current[0].className.replace(" active", "");
    	this.className += " active";
	  });
	} 

});