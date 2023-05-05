$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.up-btn').addClass("show");
		}else{
			$('.up-btn').removeClass("show");
		}
	});

    // Up botton
    $('.up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Typing Animation
    var typed = new Typed(".typing", {
        strings: ["UIUX Designer", "Graphic Designer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["UIUX Designer", "Graphic Designer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

	// Menu Toggle
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});