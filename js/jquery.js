$(document).ready(function(){
	$("#nav a").click( function() {
		$("#homeSection").hide();
		$("nav").css({"margin-left": "-100%"});		
		$("#content").load($(this).attr("href"));
        	return(false);
	});
});