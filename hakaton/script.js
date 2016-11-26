var ctx, color = "white";

$(document).ready(function () {
	
	// setup a new canvas for drawing wait for device init
    setTimeout(function () {
		newCanvas();
    }, 1000);
		
	// reset palette selection (css) and select the clicked color for canvas strokeStyle
	//ctx.beginPath();
	$(".palette").click(function(){
		$(".palette").css("border-color", "#777");
		$(".palette").css("border-style", "solid");
		$(this).css("border-color", "#fff");
		$(this).css("border-style", "dashed");
		color = $(this).css("background-color");
		ctx.beginPath();
		ctx.strokeStyle = color;
	});
    
	// link the new button with newCanvas() function
	$("#new").click(function () {
		newCanvas();
	});
	$("#draw").click(function () {
		var dataURL = document.getElementById("canvas").toDataURL();
		$.ajax({
			type: "POST",
			url: "save.php",
			data: { 
				imgBase64: dataURL
			}
			}).done(function(o) {
			console.log('saved'); 
			// If you want the file to be visible in the browser 
			// - please modify the callback in javascript. All you
			// need is to return the url to the file, you just saved 
			// and than put the image in your browser.
			});
	});
});

// function to setup a new canvas for drawing
function newCanvas() {
	//define and resize canvas
    $("#content").height($(window).height() - 90);
    var canvas = '<canvas id="canvas" width="' + 400 + '" height="' + 400 + '"></canvas>' + '<div id="picture" width="' + 400 + 'px" height="' + 400 + 'px"></div>';
	$("#content").html(canvas);
    
    // setup canvas
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.strokeStyle = "white";
	ctx.lineWidth = 5;	
	
	// setup to trigger drawing on mouse or touch
	$("#canvas").drawTouch();
    $("#canvas").drawPointer();
	$("#canvas").drawMouse();
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function () {
	var start = function (e) {
        e = e.originalEvent;
		ctx.beginPath();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY;
		ctx.moveTo(x, y);
	};
	var move = function (e) {
		e.preventDefault();
        e = e.originalEvent;
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY;
		ctx.lineTo(x, y);
		ctx.stroke();
	};
	$(this).on("touchstart", start);
	$(this).on("touchmove", move);
}; 
    
// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function () {
	var start = function (e) {
        e = e.originalEvent;
		ctx.beginPath();
		var br = this.getBoundingClientRect()
		x = e.pageX - br.left;
		y = e.pageY - br.top;
		ctx.moveTo(x, y);
	};
	var move = function (e) {
		e.preventDefault();
        e = e.originalEvent;
		var br = this.getBoundingClientRect()
		x = e.pageX - br.left;
		y = e.pageY - br.top;
		ctx.lineTo(x, y);
		ctx.stroke();
    };
	$(this).on("MSPointerDown", start);
	$(this).on("MSPointerMove", move);
};        

// prototype to	start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function () {
	var clicked = 0;
	var start = function (e) {
		clicked = 1;
		ctx.beginPath();
		var br = this.getBoundingClientRect()
		x = e.pageX - br.left;
		y = e.pageY - br.top;
		ctx.moveTo(x, y);
	};
	var move = function (e) {
		if (clicked) {
			var br = this.getBoundingClientRect()
			x = e.pageX - br.left;
			y = e.pageY - br.top;
			ctx.lineTo(x, y);
			ctx.stroke();
		}
	};
	var stop = function (e) {
		clicked = 0;
	};
	$(this).on("mousedown", start);
	$(this).on("mousemove", move);
	$(window).on("mouseup", stop);
};