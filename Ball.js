
function Ball(position, vel, rad, mass, color){
	this.pos = new Vec(position.x, position.y);
	this.vel = new Vec(vel.x, vel.y);
	this.rad = rad;
	this.mass = mass;
	this.color = color;
}

Ball.prototype.draw = function() {
	Draw.circleOutline(this.color, this.pos, this.rad);
}

