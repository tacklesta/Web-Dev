var random_number_1 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImages = "images/" + "dice" + random_number_1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImages);

var random_number_2 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImages2 = "images/" + "dice" + random_number_2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImages2);

if (random_number_1 > random_number_2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (random_number_2 > random_number_1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}