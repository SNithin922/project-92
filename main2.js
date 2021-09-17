var player1_score=0;
var player2_score=0;


player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

actule_answer = parseInt(number1) * parseInt(number2);
document.getElementById("h3n").innerHTML= iv1 + ":" + player1_score;
document.getElementById("h3n1").innerHTML=iv2 + ":" + player2_score;
document.getElementById("h2n").innerHTML=iv1;
document.getElementById("h2n2").innerHTML=iv2;

function submit()
{
    number1 = document.getElementById("input_text1").value;
    number2 = document.getElementById("input_text2").value;
    atual_answer= parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + "x" + number2 +"</h4>";
    input_box= "<br> Answer : <input type='text' id='input_check_box'>";
    check_button= "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("input_text1").innerHTML="";
    document.getElementById("input_text2").innerHTML="";
}

var answer = "player1";
var question= "player2";

 function check()
 {
     get_answer = document.getElementById("input_check_box").value;
     console.log(get_answer);
     if(get_answer == atual_answer)	
     {
        if(answer == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	if(question == "player1")
	{
		question = "player2"
		document.getElementById("h1n").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question = "player1"
		document.getElementById("h1n").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer == "player1")
	{
		answer = "player2"
		document.getElementById("h2n").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer = "player1"
		document.getElementById("h2n").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}