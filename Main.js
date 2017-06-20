
var fps;
var loop;
var grav;
var balls;
var ball1;
var ball2;
var draw;

window.onload = init;

function init(){
	fps = 60;
	loop = setInterval(gameLoop, fps / 1000);
	grav = new Vec(0, -0.01);
	draw = new Draw("canvas");
	
	ball1 = new Ball(new Vec(100, 100), new Vec(0.3, 2), 2, 1, "blue");
	ball2 = new Ball(new Vec(100, 100), new Vec(0.05, 1.3), 2, 2, "black");
	balls = [ball1, ball2];
}
function gameLoop(){
	draw.clear();
	
	//do physics
	for(var i = 0; i < balls.length; i++) {
		balls[i].pos.add(balls[i].vel.add(grav));
	}

	//draw balls
	for(var i = 0; i < balls.length; i++) {
		balls[i].draw();
	}
	
}








