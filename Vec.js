
function Vec(x=0, y=0){
	this.x = x;
	this.y = y;
}
Vec.setV = function(v){
	this.x = v.x;
	this.y = v.y;
}
Vec.setC = function(x, y){
	this.x = x;
	this.y = y;
}
Vec.add = function(v1, v2){
	return new Vec(v1.x + v2.x, v1.y + v2.y);
}
Vec.sub = function(v1, v2){
	return new Vec(v1.x - v2.x, v1.y - v2.y);
}
Vec.prototype.add = function(v){
	this.x += v.x;
	this.y += v.y;
}
Vec.prototype.sub = function(v){
	this.x -= v.x;
	this.y -= v.y;
}










