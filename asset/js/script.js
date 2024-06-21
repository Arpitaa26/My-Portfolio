$(document).ready(function(){
    $("body").mousemove(function(e){
        let x_ax = e.clientX;
        let y_ax = e.clientY;
            $(".ball_move_l").css("transform", "translateX(" + x_ax / 30 + "px)" );
            $(".ball_move_r").css("transform", "translateX(" + x_ax / -10 + "px)" );
            $(".ball_move_t").css("transform", "translateY(" + y_ax / 40 + "px)" );
            $(".ball_move_b").css("transform", "translateY(" + y_ax / -60 + "px)" );
    });
});
// typed js
$(function(){
	$(".typed").typed({
		strings: ["Web Developer.", "Web Designer.", "UI/UX Designer.", "SEO Expert"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});