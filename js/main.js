	

function hamburger() {

	var line2 = document.getElementById("secondLine").style.display;

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
	
	if (navWidth == "80%") {
		document.getElementById("nav").style.marginLeft = "0%";
	} else	{
		document.getElementById("nav").style.marginLeft = "80%";
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

	if (document.body.clientWidth < 990) {
	document.getElementById("nav").style.visibility = "visible";
	}

}
								

var clientSeats = [];	//seats that client will reserve
		
var seats = [];		//seats availability - true=free seat, false=reserved seat	
		
//loop through seats, find reserved seats and mark them color darkred;
function reservedSeats(){
			
	var seat = document.getElementById("1").id;		//seat client clicked on
	
	//random choice of reserved seats
	for (i = 0; i <= 58; i++) {
    	seats[i] = Math.floor(Math.random() * 2);
	}
			
	//loop through seats, find reserved seats and mark them color darkred;
	for (var i = seat; i < seats.length; i++) {
		if (seats[i] == false){
			document.getElementById(i).src = "img/seatTaken.png";
		} 
	}
}
		
//onclick on seat
function takeSeat(seat){
			   
	if (seats[seat]){
		//confirm on seat that client choose
		if (confirm("Seat number " + seat + " is avaible. Are you sure you want to reserve seat number " + seat + "?")) {
			//change color of the seat to red
			document.getElementById(seat).src = "img/seatYour.png";
			alert("You have reserved ticket for seat number " + seat + ".");
			//change value in array to false
			seats[seat] = false;
			//push seat number in array of client reserved seats
			clientSeats.push(seat);
			//text to declare witch seats client reserve
			if (clientSeats.length < 2){
				document.getElementById("yourSeats").innerHTML = "You reserved seat number " + clientSeats + ".";
			}
			else {
				document.getElementById("yourSeats").innerHTML = "You reserved seats number " + clientSeats.slice(0, -1) + " and " + clientSeats[clientSeats.length - 1] + ".";
			}
		}
	} 
	  
	else {
		alert("Seat " + seat + " is not available.");
	}
}
