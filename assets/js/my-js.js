$(document).ready(function(){
		
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