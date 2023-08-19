var randomNumber1 = Math.round((Math.random() * 5)) + 1

var imgString1 = "dice" + randomNumber1 +".png"

document.querySelector(".dice .img1").setAttribute("src", "./images/"+imgString1)

var randomNumber2 = Math.round((Math.random() * 5)) + 1

var imgString2 = "dice" + randomNumber2 +".png"

document.querySelector(".dice .img2").setAttribute("src", "./images/"+imgString2)

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}