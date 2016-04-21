
$(document).ready(function(){
    var canvas = document.getElementById("myCanvas");
    canvas.width=1000;
    canvas.height=1000;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,1000,1000);
    var ball = new object();
    var ballImage = new Image();
    ballImage.src = "images/ball.png";
    canvas = document.getElementById("myCanvas");
    
    
    
    //$("#myCanvas").
    //Ball
    function object() {
        this.width = 10;
        this.height = 10;
        this.x = 150;
        this.y = 50;
    }
    function render(){
        ctx.drawImage(ballImage, ball.height, ball.width);
        requestAnimationFrame(function() {
        render();
    });
    }
    render();
    
});