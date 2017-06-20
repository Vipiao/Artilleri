
function Tank(pos, rotation, color, wheel1, wheel2, canonLvl = 0, shellLvl = 0) {
	this.pos = pos;
	this.rot = rotation;
	this.color = color;
	this.canonLvl = canonLvl;
	this.shellLvl = shellLvl;
}

Tank.prototype.draw = function() {
	draw.rectHeightWidthRotFill(this.color, this.pos, 10, 20, this.rot);
}