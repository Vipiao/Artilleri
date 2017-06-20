
function Terrain(color){
	this.circumference = [];
	this.color = color;
}
Terrain.prototype.generate = function(right, left, top, bottom, resolution, patterns){
	// TODO: skriv description
	// make box
	this.circumference.push(new Vec(right, top));
	this.circumference.push(new Vec(right, bottom));
	this.circumference.push(new Vec(left, bottom));
	// note that left top will be made below
	
	// make flat terrain
	var n = parseInt((right - left) * resolution);
	for(var i=0; i<n; i++){
		this.circumference.push(new Vec((right - left) * i / n + left, top));
	}
	
	// make patterns
	var curve;
	var pattern;
	for(var i=0; i<patterns; i++){
		pattern = patterns[i];
		curve = [];
		// make spikes
		for(var j = 0; j<n; j++){
			if(Math.random() < pattern.density){
				curve.push(Math.random() * pattern.scale * 2 - pattern.scale);
			}
		}
		// smooth
		for(var j=0; j<pattern.smooth j++){
			for(var k=0; k<n k++){
				if(k == 0){
					curve[k] = (curve[k] + curve[k + 1]) / 2;
				}else if(k == n - 1){
					curve[k] = (curve[k] + curve[k - 1]) / 2;
				}else{
					curve[k] = (curve[k] + curve[k + 1] + curve[k - 1]) / 3;
				}
			}
		}
		// apply
		for(var j=this.circumference.length - n; j<this.circumference.length; j++){
			this.circumference[i].y += curve[j - (this.circumference.length - n)];
		}
	}
}
Terrain.prototype.draw = function(){
	draw.shapeOutline(this.color, this.circumference);
}




