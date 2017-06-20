
function Ball(position, vel, rad, mass, color){
	this.pos = new Vec(position.x, position.y);
	this.vel = new Vec(vel.x, vel.y);
	this.rad = rad;
	this.mass = mass;
	this.color = color;
}
Ball.prototype.draw = function() {
	draw.circleOutline(this.color, this.pos, this.rad);
}
Ball.prototype.explode = function() {
	var splitNr = 3;
	var newRad = this.rad / splitNr;
	var newMass = this.mass / splitNr;
	var newPos, newVel;
	for(var i=0; i<3; i++){
		newPos = Vec.add(this.pos, new Vec(Math.random() * 1 - 2, Math.random() * 1 - 2));
		newVel = Vec.add(this.vel, new Vec(Math.random() * 1 - 2, Math.random() * 1 - 2));
		balls.push(new Ball(newPos, newVel, newRad, newMass, this.color));
	}
	balls.splice(balls.indexOf(this), 1);
}

