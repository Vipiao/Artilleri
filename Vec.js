
function Vec(x=0, y=0){
	this.x = x;
	this.y = y;
}
Vec.add(v1, v2){
	return new Vec(v1.x + v2.x, v1.y + v2.y);
}
Vec.sub(v1, v2){
	return new Vec(v1.x - v2.x, v1.y - v2.y);
}
Vec.prototype.add(v){
	this.x += v.x;
	this.y += v.y;
}
Vec.prototype.sub(v){
	this.x -= v.x;
	this.y -= v.y;
}




