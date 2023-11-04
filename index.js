var randomNumber1 = Math.floor(Math.random()*6);
var randomNum = (randomNumber1) + 1;

var newSource = "dice" + randomNum + ".png";
newSource = "images/" + newSource;
console.log(newSource);

var valToChange = document.querySelectorAll("img")[0];
//console.log(valToChange);
valToChange.setAttribute("src",newSource);

var randomNumber2 = Math.floor(Math.random()*6);
var randomNum2 = (randomNumber2) + 1;

var dice2Source = "images/dice" + randomNum2 + ".png";

var diceChange = document.querySelectorAll("img")[1];
diceChange.setAttribute("src",dice2Source);



if(randomNum2 > randomNum){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins !";
}else if(randomNum > randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins !";
}else{
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 == Player 2"; 
}