var RPS = ["Rock", "Paper", "Scissors"];
var cpu;
var user;

var won = 0;
var lost = 0;
var draw = 0;


function cpuPlay(){
	var selected = Math.floor((Math.random() * RPS.length));
	cpu = RPS[selected];
	loadImage("cpu", selected);
	check();
}


function play(choice){
	$("#user").empty();
	$("#cpu").empty();
	$("#display").empty();
	user = RPS[choice];
	loadImage("user", choice);
	cpuPlay();
}

function check(){
	if(user == cpu){
		$("#display").prepend('<h1>DRAW</h1>');
		draw = draw +1;
	}else if(user == "Rock" && cpu == "Paper"){
		$("#display").prepend('<h1>You Lose</h1>');
		lost = lost + 1;
	}else if(user == "Rock" && cpu == "Scissors"){
		$("#display").prepend('<h1 class = "animated tada">You Win</h1>');
		won = won + 1;
	}else if(user == "Paper" && cpu == "Rock"){
		$("#display").prepend('<h1 class = "animated tada">You Win</h1>');
		won = won + 1;
	}else if(user == "Paper" && cpu == "Scissors"){
		$("#display").prepend('<h1>You Lose</h1>');
		lost = lost + 1;
	}else if(user == "Scissors" && cpu == "Paper"){
		$("#display").prepend('<h1 class = "animated tada">You Win</h1>');
		won = won + 1;
	}else if(user == "Scissors" && cpu == "Rock"){
		$("#display").prepend('<h1>You Lose</h1>');
		lost = lost + 1;
	}
	$("#score").empty();
	$("#score").prepend(' Wins: ' + won + ' Losses: ' + lost + ' Draws: ' + draw);
	var total = won + lost + draw;
	var percentage = won/total;
	percentage = Math.round(percentage*10000)/100;
	$("#score").append('<br>Your win percentage is: ' + percentage + '%');
}

function loadImage(who, what){
	if(what == 0){
		$("#"+who).prepend('<h1>'+ who +' played:</h1><img src="images/rock' +  (Math.floor((Math.random() * 3)))+ '.gif" width = "80%" class = "animated flipInX">');
	}
	else if(what == 1){
		$("#"+who).prepend('<h1>'+ who +' played:</h1><img src="images/paper' +  (Math.floor((Math.random() * 2)))+ '.gif" width = "80%" class = "animated flipInX">');
	}
	else if(what == 2){
		$("#"+who).prepend('<h1>'+ who +' played:</h1><img src="images/scissors' +  (Math.floor((Math.random() * 2)))+ '.gif" width = "80%" class = "animated flipInX">');
	}
}

