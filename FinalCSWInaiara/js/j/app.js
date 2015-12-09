//Eric Liang

var main = function () {

	//EXECUTE ONCE THE WEBPAGE LOADS
	$(".tint").css("opacity", "0.85");

	setTimeout(function () {
		$(".landing-title")
		.css("-webkit-transform", "translateY(0)").css("opacity", "1");
	}, 400);

	setTimeout(function () {
		$(".subtitle2")
		.css("-webkit-transform", "translateY(0)").css("opacity", "1");
	}, 600);

	setTimeout(function () {
		$(".landing-subtitle")
		.css("-webkit-transform", "translateY(0)").css("opacity", "1");
	}, 800);

	setTimeout(function () {
		$(".sign-up")
		.css("-webkit-transform", "translateY(0)").css("opacity", "0.85");
	}, 900);

	setTimeout(function() {
		$("#learn-more")
		.css("-webkit-transform", "translateY(0)").css("opacity", "0.85");
	}, 1000);
	
    $("#learn-more").click(function() {
        $('html, body').animate({
            scrollTop: $(".features-container").offset().top - 135
        }, 500);
    });
    
    $(".team").hover(
    	function() { $(this).addClass("team-img-active");},
    	function() { $(this).removeClass("team-img-active");}
    )
    
    // ********** SCROLL ANIMATIONS ***********
    
    // Feature button scale-up
    $(".point1-img").waypoint(function(direction) {
	    if (direction == 'down') {
		    $(this).css("-webkit-transform", "scale(1)");
		    $(this).css("-moz-transform", "scale(1)");
	    }
	    else {
			$(this).css("-webkit-transform", "scale(0)");
			$(this).css("-moz-transform", "scale(0)");
		}
    }, {offset: '85%' });
    
    $(".point2-img").waypoint(function(direction) {
	    if (direction == 'down') {
		    $(this).css("-webkit-transform", "scale(1)");
		    $(this).css("-moz-transform", "scale(1)");
	    }
	    else {
			$(this).css("-webkit-transform", "scale(0)");
			$(this).css("-moz-transform", "scale(0)");
		}
    }, {offset: '85%' });

    // Design card slide-right
    $("#card1").waypoint(function(direction) {
	    if (direction == 'down') {
		    $("#card1").css("-webkit-transform", "translateX(0px)");
		    $("#card2").css("-webkit-transform", "translateX(40px)");
		    $("#card3").css("-webkit-transform", "translateX(80px)");
		    $("#design-title").css("opacity", "1");
		    $("#design-subtitle").css("opacity", "1");
		    
		    $("#card1").css("-moz-transform", "translateX(0px)");
		    $("#card2").css("-moz-transform", "translateX(40px)");
		    $("#card3").css("-moz-transform", "translateX(80px)");
	    }
	    else {
			$("#card1").css("-webkit-transform", "translateX(-280px)");
		    $("#card2").css("-webkit-transform", "translateX(-280px)");
		    $("#card3").css("-webkit-transform", "translateX(-280px)");
		    $("#design-title").css("opacity", "0");
		    $("#design-subtitle").css("opacity", "0");
		    
		    $("#card1").css("-moz-transform", "translateX(-280px)");
		    $("#card2").css("-moz-transform", "translateX(-280px)");
		    $("#card3").css("-moz-transform", "translateX(-280px)");
		}
    }, {offset: '50%' });

	// Responsive images slide-in
	$(".responsive-img-container").waypoint(function(direction) {
	    if (direction == 'down') {
	    	$(".iphone").css("-webkit-transform", "translateX(0)");
	    	$(".iphone").css("-moz-transform", "translateX(0)");
	    	$(".iphone").css("opacity", "1");

	    	setTimeout(function() {
	    		$(".surface").css("-webkit-transform", "translateX(0)");
	    		$(".surface").css("-moz-transform", "translateX(0)");
	    		$(".surface").css("opacity", "1");
	    	}, 170)
	    }
	    else {
		    $(".surface").css("-webkit-transform", "translateX(100px)");
		    $(".iphone").css("-webkit-transform", "translateX(-100px)");

		    $(".surface").css("opacity", "0");
		    $(".iphone").css("opacity", "0");
		    
		    $(".surface").css("-moz-transform", "translateX(100px)");
		    $(".iphone").css("-moz-transform", "translateX(-100px)");
		}
    }, {offset: '50%' });

    $(".sign-up-container").waypoint(function(direction) {
	    if (direction == 'down') {
		    $(".sign-up-title").css("-webkit-transform", "translateY(0)").css("opacity", "1");
		    $(".sign-up-subtitle").css("-webkit-transform", "translateY(0)").css("opacity", "1");
	    }
	    else {
	  		$(".sign-up-title").css("-webkit-transform", "translateY(50px)").css("opacity", "0");
	    	$(".sign-up-subtitle").css("-webkit-transform", "translateY(50px)").css("opacity", "0");
		}
    }, {offset: '65%' });

    $(".sign-up-button").hover(
    	function() { $(this).addClass("sign-up-button-active");},
    	function() { $(this).removeClass("sign-up-button-active");}
    )

	$(window).scroll(function() {
		var height = $(this).scrollTop();
        if (height > 100) {
	        $(".nav").addClass("scrolled");
        }
        if (height < 100) {
        	$(".nav").removeClass("scrolled");
        }
    });
    
}

$(document).ready(main);