$(document).ready(function(){
	

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
		
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces:16}, 2000);
	});

	$("#fadein").click(function(){
		$("#image").fadein("slow");
	});

	$("#fadeout").click(function(){
		$("#image").fadeout("5000");
	});



});