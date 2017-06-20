
function Draw(canvas_ID){
	// takes id of canvas html element
	this.canvas = document.getElementById(canvas_ID);
	this.pen = canvas.getContext("2d");
	this.flipVertical = true;
}
Draw.prototype.circleOutline = function(color,centerPos,radius, width = 1) {
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









