$(document).ready(function(){
	
	$("#nav a").click( function() {
		$("#homeSection").hide();
		$("#nav").css({"margin-left": "-100%"});
		$("#content").css({"margin-top": "-124px"});
		$("#firstLine").removeClass("change1");
		$("#secondLine").show();
		$("#thirdLine").removeClass("change2");	
		$("#getTickets").show();	
		$("#content").load($(this).attr("href"));
        	return(false);
	});

	$(".movie").click(function(){
		$(".movie").hide();
		$(this).show();
		$("#getTickets").show();
	});
});