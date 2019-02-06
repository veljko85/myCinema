$(document).ready(function(){
	$("#nav a").click( function() {
		$("#homeSection").hide();		
		$("#content").load($(this).attr("href"));
        	return(false);
	});
});