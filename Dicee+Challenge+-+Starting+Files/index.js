var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var img = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
console.log(img[randomNumber1]);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var newImg1 = img[randomNumber1];
var newImg2 = img[randomNumber2];

var heading = document.querySelector("h1");

function myFunction(){
    dice1.setAttribute("src", newImg1);
    dice2.setAttribute("src", newImg2);

    if (randomNumber1 > randomNumber2){
        heading.innerHTML = "Player 1 Wins!"
    } else if (randomNumber2 > randomNumber1 ){
         heading.innerHTML = "Player 2 Wins!"
    }else{
         heading.innerHTML = "Draw!"
    }
} 





