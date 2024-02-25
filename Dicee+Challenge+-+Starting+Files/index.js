var randomNumer1 = Math.floor(Math.random()*6 + 1);
var randomNumer2 = Math.floor(Math.random()*6 + 1);

var player1 = document.getElementsByClassName("img1")[0];
var player2 = document.getElementsByClassName("img2")[0];

player1.setAttribute("src", "./images/dice" + randomNumer1 + ".png");
player2.setAttribute("src", "./images/dice" + randomNumer2 + ".png");

var heading = document.querySelector("h1")

if(randomNumer1>randomNumer2)
{
    heading.innerHTML = "Player 1 wins!";
}
else if(randomNumer2>randomNumer1)
{
    heading.innerHTML = "Player 2 wins!";
}
else
{
    heading.innerHTML = "Match Tied!";
}