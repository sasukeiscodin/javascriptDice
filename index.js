var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "./images/dice" + randomNumber2 + ".png";

var throwDice1 = document.querySelectorAll("img")[0];

throwDice1.setAttribute("src",randomDice1);

var throwDice2 = document.querySelectorAll("img")[1];

throwDice2.setAttribute("src",randomDice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Its a Draw!";
}