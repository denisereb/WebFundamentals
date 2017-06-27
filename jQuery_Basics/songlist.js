

$(document).ready(function(){

	$("#add").on("click", function(){
		var song= $("#song").val();
		console.log(song);

		var listitem = "<li>" + song  + "</li>";
		console.log(listitem);
		$("#songlist").append(listitem);
		$("#song").val("");
	})
});