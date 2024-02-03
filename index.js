var randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1 // 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1-6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Agar 1-o'yinchi yutsa

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// Agar 2-o'yinchi yutsa
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} 
// Agar teng bo'lib qolsa

else {
    document.querySelector("h1").innerHTML = "Draw!";
}