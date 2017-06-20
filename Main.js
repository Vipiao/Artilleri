
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
	loop = setInterval(fps / 1000);
	grav = new Vec(0.1);
	ball1 = new Ball(new Vec(100, 100), new Vec(3, -4), 10, 1, "blue");
	ball2 = new Ball(new Vec(100, 100), new Vec(0.5, -3), 10, 2, "black");
	balls = [ball1, ball2];
	draw = new Draw("canvas");
}
function gameLoop(){
	
}








