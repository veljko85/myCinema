$(document).ready(function(){
	$("#nav a").click( function() {
		$("#homeSection").hide();
		$("#nav").css({"margin-left": "-100%"});
		$("#content").css({"margin-top": "-124px"});		
		$("#content").load($(this).attr("href"));
        	return(false);
	});
});