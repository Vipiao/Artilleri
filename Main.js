
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
	grav = new Vec(0.1);
	draw = new Draw("canvas");
	
	ball1 = new Ball(new Vec(100, 100), new Vec(0.3, -0.4), 10, 1, "blue");
	ball2 = new Ball(new Vec(100, 100), new Vec(0.05, -0.3), 10, 2, "black");
	balls = [ball1, ball2];
}
function gameLoop(){
	//do physics
	balls[0].pos.add(balls[0].vel);
	balls[1].pos.add(balls[1].vel);
	
	
	//draw balls
	balls[0].draw;
	balls[1].draw;
}








