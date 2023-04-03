var randnum=Math.floor(Math.random()*6)+1;
var randimg="images/dice"+randnum+".png"; //to chose random dice image.

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg);

var randnum2=Math.floor(Math.random()*6)+1;
var randimg2="images/dice"+randnum2+".png"; //to chose random dice image.

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg2);

if(randnum>randnum2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(randnum<randnum2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML="Draw!";
}