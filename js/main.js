	

function hamburger() {

	var line1 = document.getElementById("firstLine").style.top;
	var line2 = document.getElementById("secondLine").style.display;
	var line3 = document.getElementById("thirdLine").style.top;
	var navWidth = document.getElementById("nav").style.marginLeft;
	var homeSection = document.getElementById("homeSection").style.marginTop;
	var content = document.getElementById("content").style.marginTop;

	if (line2 == "none") {
		document.getElementById("firstLine").classList.remove("change1");
		document.getElementById("secondLine").style.display = "block";
		document.getElementById("thirdLine").classList.remove("change2");

	}	else	{
		document.getElementById("firstLine").classList.add("change1");
		document.getElementById("secondLine").style.display = "none";
		document.getElementById("thirdLine").classList.add("change2");
	}
	
	if (navWidth == "-20%") {
		document.getElementById("nav").style.marginLeft = "-100%";
	} else	{
		document.getElementById("nav").style.marginLeft = "-20%";
	}

	if (homeSection == "0px") {
		document.getElementById("homeSection").style.marginTop = "-124px";
	} else	{
		document.getElementById("homeSection").style.marginTop = "0px";
	}

	if (content == "0px") {
		document.getElementById("content").style.marginTop = "-124px";
	} else	{
		document.getElementById("content").style.marginTop = "0px";
	}
}