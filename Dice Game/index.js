var randomnum1 = Math.floor(Math.random()*6)+1;
var randomdiceimg = "dice"+randomnum1+".png";
var randomimage = "images/"+randomdiceimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomdiceimg2 = "dice"+randomnum2+".png";
var randomimage2 = "images/"+randomdiceimg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomnum2>randomnum1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw..."
}