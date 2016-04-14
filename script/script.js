
$(document).ready(function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var randomBall=Math.floor(Math.random()*650)
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,650,400);
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    
})