// VECTOR "Class"
function Vec (x = 0,y = 0) {
	// constructor
	this.ID = Math.random();
	this.x = x;
	this.y = y;
}
Vec.newVec = function (vec) {
	return new Vec (vec.x,vec.y);
}
Vec.newVecC = function (x, y) {
	return new Vec (x, y);
}
Vec.prototype.setV = function (v){
	this.x = v.x;
	this.y = v.y;
	return this;
}

Vec.prototype.setC = function (x, y){
	this.x = x;
	this.y = y;
	return this;
}
Vec.prototype.swap = function (vec) { // swaps this for vec
	var x = this.x; var y = this.y;
	this.setV(vec);
	vec.x = x; vec.y = y;
}
Vec.prototype.equal = function (vec,i) {
	return Math.abs(this.x-vec.x)<i && Math.abs(this.y-vec.y)<i;
}
Vec.prototype.add = function (v) {
	this.x += v.x;
	this.y += v.y;
	return this;
}
Vec.prototype.addM = function () {
	var args = arguments;
	for (var i=0;i<args.length;i++) {
		this.x += args[i].x;
		this.y += args[i].y;
	}
	return this;
}
Vec.prototype.addC = function (x,y) { // add coordinates
	this.x += x;
	this.y += y;
	return this;
}
Vec.add = function (v1, v2){
	return new Vec(v1.x + v2.x, v1.y + v2.y);
}
Vec.addM = function (){
	var args = arguments;
	var retVec = new Vec(); // return vector
	for (var i=0;i<args.length;i++) {
		retVec.x += args[i].x;
		retVec.y += args[i].y;
	}
	return retVec;
}
Vec.prototype.sub = function (v) {
	this.x -= v.x;
	this.y -= v.y;
	return this;
}
Vec.prototype.subM = function () {
	var args = arguments;
	for (var i=0;i<args.length;i++) {
		this.x -= args[i].x;
		this.y -= args[i].y;
	}
	return this;
}
Vec.sub = function (v1, v2){
	return new Vec(v1.x - v2.x, v1.y - v2.y);
}
Vec.subM = function (){
	var args = arguments;
	var retVec = Vec.newVec(args[0]); // return vector
	for (var i=1;i<args.length;i++) {
		retVec.x -= args[i].x;
		retVec.y -= args[i].y;
	}
	return retVec;
}
Vec.dot = function (v1,v2) { // dot product between v1 and v2. Is zero if orthogonal
	var retVal = v1.x*v2.x + v1.y*v2.y;
	return retVal;
}
Vec.prototype.dot = function (v) { // dot product between this and "b"
	var retVal = this.x*v.x + this.y*v.y;
	return retVal;
}
Vec.det = function (v1,v2) { // determinant between v1 and v2. Is zero if paralell
	var retVal = v1.x * v2.y - v1.y * v2.x;
	return retVal;
}
Vec.prototype.det = function (v) { // determinant between v1 and v2. Is zero if paralell
	var retVal = this.x * v.y - this.y * v.x;
	return retVal;
}
Vec.prototype.mul = function(i){
	this.x *= i;
	this.y *= i;
	return this;
}
Vec.mul = function (v,i){
	var retVec = Vec.newVec(v);
	retVec.x *= i;
	retVec.y *= i;
	return retVec;
}
Vec.prototype.div = function(i){
	var inv_i = 1/i;
	this.x *= inv_i;
	this.y *= inv_i;
	return this;
}
Vec.div = function(v, i){
	var retVec = Vec.newVec(v);
	var inv_i = 1/i;
	retVec.x *= inv_i;
	retVec.y *= inv_i;
	return retVec;
}
Vec.prototype.lgth = function(){
	var ret_val = Math.sqrt(this.x * this.x + this.y * this.y);
	return ret_val;
}
Vec.lgth = function (v1,v2){
	var dx = v2.x - v1.x;
	var dy = v2.y - v1.y;
	return Math.sqrt(dx * dx + dy * dy);
}
Vec.prototype.sqrLgth = function (){
	var ret_val = this.x * this.x + this.y * this.y;
	return ret_val;
}
Vec.sqrLgth = function (v1,v2){
	var dx = v2.x - v1.x;
	var dy = v2.y - v1.y;
	return dx * dx + dy * dy;
}
Vec.prototype.roughLgth = function () {
	return Math.abs(this.x) + Math.abs(this.y);
}
Vec.roughLgth = function (v1,v2){
	var dx = v2.x - v1.x;
	var dy = v2.y - v1.y;
	return Math.abs(dx) + Math.abs(dy);
}
Vec.prototype.unit = function(){
	return this.div(this.lgth());
}
Vec.unit = function(v){
	return Vec.div(v, v.lgth());
}
Vec.prototype.resize = function(length){
	var m = length / this.lgth();
	this.x *= m;
	this.y *= m;
	return this;
}
Vec.resize = function(v, length){
	var m = length / v.lgth();
	v.x *= m;
	v.y *= m;
	return v;
}
Vec.prototype.roughUnit = function(){
	return this.div(this.roughLgth());
}
Vec.roughUnit = function(v){
	return Vec.div(v, v.roughLgth());
}
Vec.prototype.neg = function () {
	this.x = - this.x;
	this.y = - this.y;
	return this;
}
Vec.neg = function (v) {
	return new Vec(-v.x, -v.y);
}
Vec.prototype.proj = function (vec) { // vec = onto, this = the projected. outputs the projected vector
	var m = Vec.dot(this, vec) / vec.sqrLgth(); // multiplier
	this.setC(vec.x * m, vec.y * m);
	return this;
}
Vec.proj = function (vector, onto) { // vec = onto, this = the projected. outputs the projected vector
	//var vec = Vec.newVec(vector);
	var m = Vec.dot(vector, onto) / onto.sqrLgth(); // multiplier
	return Vec.mul(onto, m); // note that vec changes here
}
Vec.projLgth = function(v,onto){
	return Vec.dot(v,onto) / onto.lgth();
}
Vec.projLgthRaw = function(v,onto, length){
	return Vec.dot(v,onto) / length;
}
Vec.prototype.turnCW = function () { // turns the vector 90 deg CW
	this.setC(this.y, - this.x);
	return this;
}
Vec.turnCW = function (v){
	return new Vec(v.y, - v.x);
}
Vec.prototype.turnCCW = function () { // turns the vector 90 deg CW
	this.setC( - this.y, this.x);
	return this;
}
Vec.turnCCW = function (v){
	return new Vec(- v.y, v.x);
}
Vec.prototype.rotate = function (rad) { // positive rad is CCW rotation
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);
	this.setC(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
	return this;
}
Vec.rotate = function (v, rad) { // positive rad is CCW rotation
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);
	return new Vec(v.x * cos - v.y * sin, v.x * sin + v.y * cos);
}
Vec.lerp = function (v1, v2, lerp) {
	// lerps inbetween v1 and v2. 0 <= lerp <= 1. Other numbers give position outside of v1 to v2 range
	var retVec = Vec.add(v1, Vec.sub(v2, v1).mul(lerp));
	return retVec;
}
Vec.prototype.lerp = function (v, lerp) {
	// lerps inbetween v1 and v2. 0 <= lerp <= 1. Other numbers give position outside of v1 to v2 range
	var retVec = Vec.add(v1, Vec.sub(v2, v1).mul(lerp));
	this.add(Vec.sub(v, this));
	return this;
}
// DEBUG
Vec.prototype.geogebra = function(name = false){
	if(name){
		return name + "= (" + this.x + "," + this.y + ")";
	} else {
		return "(" + this.x + "," + this.y + ")";
	}
}









