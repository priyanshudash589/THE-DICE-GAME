var randomNumber1=Math.floor((Math.random()*6)+1);

var randomNumber2=Math.floor((Math.random()*6)+1);


var randomDice="dice"+randomNumber1+".png";//string

var randomDice2="dice"+randomNumber2+".png";//string


var randomSource="./images/"+randomDice;

var randomSource2="./images/"+randomDice2;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSource2);






if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}

setTimeout(function(){document.querySelector("h1").innerHTML="Refresh Me"},1500);