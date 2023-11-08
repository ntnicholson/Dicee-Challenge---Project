var randomNumber1 = GetRandomNumber();
var randomNumber2 = GetRandomNumber();

DeclareWinner();
document.querySelector("img.img1").setAttribute("src", "images\\dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images\\dice" + randomNumber2 + ".png");

function GetRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}
function DeclareWinner(){
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerText = "Draw";
    }
}