var photos = ["images/dice1.png", "images/dice2.png",
    "images/dice3.png", "images/dice4.png",
    "images/dice5.png", "images/dice6.png"]

var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;



document.querySelector(".img1").setAttribute("src", photos[p1]);
document.querySelector(".img2").setAttribute("src", photos[p2]);

if (p1 > p2) {
    document.querySelector("h1").innerHTML = ("Player 1 wins!!");
} else if (p1 == p2){
    document.querySelector("h1").innerHTML = ("Draw");
}else {
    document.querySelector("h1").innerHTML("Player 2 wins!!");
}




