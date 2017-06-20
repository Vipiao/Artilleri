
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
	// delete old ball
	balls.splice(balls.indexOf(this), 1);
	if(this.rad < 0.5){
		return;
	}
	// split
	var splitNr = 3;
	var power = 5;
	var newRad = this.rad / Math.sqrt(splitNr);
	var newMass = this.mass / splitNr;
	var newBalls = [];
	var delta = new Vec();
	var randVel, newBall;
	for(var i=0; i<splitNr; i++){
		randVel = new Vec(Math.random() * power - power * 0.5, Math.random() * power - power * 0.5);
		delta.add(randVel); // measure total momentum change
		newBall = new Ball(Vec.newVec(this.pos), randVel.add(this.vel), newRad, newMass, this.color);
		newBalls.push(newBall);
		balls.push(newBall);
	}
	// conserve momentum
	delta.div(splitNr);
	for(var i=0; i<newBalls.length; i++){
		newBalls[i].vel.sub(delta);
	}
}

