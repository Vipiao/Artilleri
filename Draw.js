
function Draw(canvas_ID){
	// takes id of canvas html element
	this.canvas = document.getElementById(canvas_ID);
	this.pen = canvas.getContext("2d");
	this.flipVertical = true;
}
Draw.prototype.clear = function (color) {
	this.rectStartEndFill(color, new Vec(0,0), new Vec(this.canvas.width, this.canvas.height));
}
Draw.prototype.rectStartEndFill = function (color, start, end) {
	// will fill inn a rectangle from start vector (bottom left) to the end vector (top right)
	if (this.flipVertical){
		start = Vec.newVec(start);
		start.y = this.canvas.height - start.y;
		end = Vec.newVec(end);
		end.y = this.canvas.height - end.y;
	}
	this.pen.beginPath();
	this.pen.rect(start.x,start.y, end.x-start.x, end.y-start.y);
	this.pen.fillStyle = color;
	this.pen.fill();
}
Draw.prototype.circleOutline = function(color,centerPos,radius, width = 1) {
	// will draw an outline of a circle with color (string) at centerPos (vector) width radius and an optional width
	this.pen.beginPath();
	if (this.flipVertical){
		this.pen.arc(centerPos.x, this.canvas.height - centerPos.y,radius,0, Math.PI * 2);
	}else{
		this.pen.arc(centerPos.x,centerPos.y,radius,0, Math.PI * 2);
	}
	this.pen.strokeStyle = color;
	this.pen.lineWidth = width;
	this.pen.stroke();
}
Draw.prototype.vAxis = function (color,x, width = 1) { // draws a vertical axis
	this.segC(color, x, 0, x, this.canvas.height, width);
}
Draw.prototype.hAxis = function (color,y, width = 1) { // draws a horizontal axis
	this.segC(color, 0, y, this.canvas.width, y, width);
}
Draw.prototype.grid = function () {
	//  will draw grids onto the canvas. Arguments are the sizes between the grid boxes
	var args;
	if(arguments.length == 0){
		args = [10,50,100];
	}else{
		args = arguments;
	}
	for(var i=0;i<this.canvas.width; i+=args[0]){
		for(var j=0;j<args.length;j++){
			if(i % args[j] == 0){
				this.vAxis("black", i, (j+1)*0.1);
			}
		}
	}
	for(var i=0;i<this.canvas.height; i+=args[0]){
		for(var j=0;j<args.length;j++){
			if(i % args[j] == 0){
				this.hAxis("black", i, (j+1)*0.1);
			}
		}
	}
}









