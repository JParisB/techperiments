// JavaScript Document
var myPencils = {
	Neighbor: function(context) {brushObjects.drawNeighbor(context);},
	Point: function(context) {brushObjects.drawPoint(context);},	
	Line: function(context) {brushObjects.drawLine(context);},
	Fur: function(context) {brushObjects.drawFur(context);},
	Flakes: function(context) {brushObjects.drawSnowFlakes(context);},
	Circles: function(context) {brushObjects.drawRandomRadiusOpacity(context);},
	Brushstroke: function(context) {brushObjects.drawBrushstroke(context);},
	MagicBrush: function(context) {brushObjects.drawMagicBrush(context);},
	BigPixel: function(context) {brushObjects.drawBigPixel(context)}
}

var brushObjects = {
	erasebrush : function(ctx) {
		if (pencilsModel.eraserEnabled()) {
			document.getElementById("status").innerHTML = "ERASER SET";
			ctx.globalCompositeOperation = "destination-out";
			ctx.fillStyle = "rgba(0,0,0,1)"
		}
	},
	drawNeighbor : function(ctx) 
	{

		arrayofPoints.push({x:(globalX * 1),y:(globalY * 1)});
		ctx.beginPath();
		ctx.lineWidth = currentDrawStyle.pencilWidth;
		hexToRGB.setHex(currentDrawStyle.LineColor);
		ctx.strokeStyle = 'rgba(' + hexToRGB.R + ',' + hexToRGB.G + ',' + hexToRGB.B + ',0)';
		
		if (!pencilsModel.smoothLine()) {ctx.strokeStyle = currentDrawStyle.LineColor;}
		
		ctx.lineJoin = ctx.lineCap = 'round';
		this.erasebrush(ctx);
		
		ctx.moveTo(arrayofPoints[arrayofPoints.length - 2].x, arrayofPoints[arrayofPoints.length - 2].y);
		ctx.lineTo(arrayofPoints[arrayofPoints.length - 1].x, arrayofPoints[arrayofPoints.length - 1].y);
		ctx.stroke();

		for (var i = 0, len = arrayofPoints.length; i < len; i++) {
			dx = arrayofPoints[i].x - arrayofPoints[arrayofPoints.length-1].x;
			dy = arrayofPoints[i].y - arrayofPoints[arrayofPoints.length-1].y;
			d = dx * dx + dy * dy;
			
			tolerance = currentDrawStyle.pixelTolerance;
			tolerance = 800 + (tolerance * 200); // 1 = 1000, 2 = 1200, 3 = 1400...

			if (d < tolerance) {
				ctx.beginPath();
				hexToRGB.setHex(currentDrawStyle.LineColor);
				
				ctx.lineWidth = currentDrawStyle.joinWidth;
				
				ctx.strokeStyle = 'rgba(' + hexToRGB.R + ',' + hexToRGB.G + ',' + hexToRGB.B + ',0.1)';
				
				this.erasebrush(ctx);
				ctx.moveTo( arrayofPoints[arrayofPoints.length-1].x + (dx * 0.2), arrayofPoints[arrayofPoints.length-1].y + (dy * 0.2));
				ctx.lineTo( arrayofPoints[i].x - (dx * 0.2), arrayofPoints[i].y - (dy * 0.2));
				ctx.stroke();
			}
		}
	},	
	drawPoint : function(ctx) 
	{
		ctx.beginPath();
		ctx.arc(globalX,globalY,currentDrawStyle.pencilWidth,0,(2 * Math.PI),true); //(2*PI radians = 360 degrees)
		ctx.fillStyle = currentDrawStyle.LineColor;
		
		this.erasebrush(ctx);
		
		ctx.fill();
	},
	drawLine : function(ctx) 
	{
		ctx.strokeStyle = currentDrawStyle.LineColor;
		
		this.erasebrush(ctx);
		
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth  = currentDrawStyle.pencilWidth;
		ctx.lineTo(globalX,globalY);
		ctx.stroke();
	},
	drawFur : function(ctx) 
	{	
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth = 1;
		distance = parseInt(currentDrawStyle.pencilWidth);
		var tempCords = {
			x1:globalX - distance, y1:globalY - distance, x2:globalX + distance, y2:globalY + distance, 
			x3:parseInt(lastPoint.x) + distance, y3:parseInt(lastPoint.y) + distance, x4:parseInt(lastPoint.x) - distance, y4:parseInt(lastPoint.y) - distance
		}
		ctx.moveTo(tempCords.x1,tempCords.y1);
		ctx.lineTo(tempCords.x2,tempCords.y2);
		ctx.lineTo(tempCords.x3,tempCords.y3);
		ctx.lineTo(tempCords.x4,tempCords.y4);
		ctx.fillStyle = currentDrawStyle.LineColor;
		
		this.erasebrush(ctx);
		
		ctx.fill();
		lastPoint = { x: (globalX), y: (globalY) };
	},
	drawSnowFlakes : function(ctx) 
	{
		ctx.lineCap = "round";
		ctx.lineJoin = "round";	
		ctx.lineWidth = 1;
		maxDistance = parseInt(currentDrawStyle.pencilWidth);
		x1 = getRandomInt((parseInt(globalX) - 3),(parseInt(globalX) + 3));
		y1 = getRandomInt((parseInt(globalY) - 3),(parseInt(globalY) + 3));
		x2 = getRandomInt((x1 - maxDistance),(x1 + maxDistance));
		y2 = getRandomInt((y1 - maxDistance),(y1 + maxDistance));
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.strokeStyle = currentDrawStyle.LineColor;
		
		this.erasebrush(ctx);
		
		ctx.stroke();
	},
	drawRandomRadiusOpacity : function(ctx) 
	{	
		counter = counter + 1;
		drawDistance = getRandomInt((parseInt(currentDrawStyle.pencilWidth) / 3),currentDrawStyle.pencilWidth);	
		
		if (counter >= drawDistance) {
			ctx.globalAlpha = 0.5;
			ctx.beginPath();
			// Draw an arc at (500,50) with radius 30 from 0 to 360 degrees,anticlockwise
			minRadius = (currentDrawStyle.pencilWidth) / 2;
			maxRadius = currentDrawStyle.pencilWidth
			outerRadius = getRandomInt(minRadius,maxRadius)
			//innerRadius = outerRadius - (parseInt(outerRadius * 0.5)) == 0?1:parseInt(outerRadius * 0.2);
			innerRadius = 0;
			var grd = ctx.createRadialGradient(globalX, globalY, innerRadius, globalX, globalY, outerRadius);
			grd.addColorStop(0, currentDrawStyle.LineColor);
			grd.addColorStop(1, currentDrawStyle.ShadowColor);
			
			ctx.fillStyle = grd;
			this.erasebrush(ctx);
			
			ctx.arc(globalX,globalY,outerRadius,0,2*Math.PI,true); //(2*PI radians = 360 degrees)
			ctx.fill();
			counter = 0;
		}
	},
	drawBrushstroke : function(ctx) 
	{	
		arrayofPoints.push( {x: globalX, y: globalY} );
		//document.getElementById("status").innerHTML = counter + " -- " + arrayofPoints.length;
		counter = counter + 1;
		drawDistance = parseInt(currentDrawStyle.pencilWidth);
		
		if (counter >= drawDistance) {
			tempCords = {
				getMidPoint : function(val1,val2) {
					midPoint = (parseInt(val1) + parseInt(val2)) / 2;
					return midPoint;
				},
				x1:	arrayofPoints[arrayofPoints.length - drawDistance].x,
				y1: arrayofPoints[arrayofPoints.length - drawDistance].y,
				x2: arrayofPoints[arrayofPoints.length - 1].x,
				y2: arrayofPoints[arrayofPoints.length - 1].y,
				cpx1: function() {return getRandomInt(this.x1, this.getMidPoint(this.x1, this.x2))},
				cpy1: function() {return getRandomInt(this.y1, this.getMidPoint(this.y1, this.y2))},
				cpx2: function() {return getRandomInt(this.getMidPoint(this.x1, this.x2), this.x2)},
				cpy2: function() {return getRandomInt(this.getMidPoint(this.y1, this.y2), this.y2)}
			};
			// Random Factor
			myAtan = Math.atan2(Math.abs(tempCords.y2 - tempCords.y1), Math.abs(tempCords.x2 - tempCords.x1));
			if ((myAtan >= 0) && (myAtan <= 0.75)) {myPosition = "H";} else {myPosition = "V";}
			factor = Math.floor((drawDistance / 2));
			switch (myPosition) {
				case "H":
					factory1 = getRandomInt(-factor,factor);
					factory2 = getRandomInt(-factor,factor);
					factorx1 = 0;
					factorx2 = 0;
					break;
				case "V":
					factory1 = 0;
					factory2 = 0;
					factorx1 = getRandomInt(-factor,factor);
					factorx2 = getRandomInt(-factor,factor);			
					break;	
			}
			
			document.getElementById("status").innerHTML = factory1 + " -- " + factory2 + " -- " + factorx1 + " -- " + factorx2
			
			var grd = ctx.createLinearGradient(tempCords.x1,tempCords.y1,tempCords.x2,tempCords.y2);
			grd.addColorStop(0, currentDrawStyle.LineColor);
			grd.addColorStop(1, currentDrawStyle.ShadowColor);		
			
			ctx.beginPath();
			ctx.lineCap = "round";
			ctx.lineJoin = "round";	
			ctx.lineWidth = 0;
			
			ctx.fillStyle = grd;
			this.erasebrush(ctx);
			
			ctx.moveTo(tempCords.x1,tempCords.y1);	
			ctx.bezierCurveTo(tempCords.cpx1() + factorx1, tempCords.cpy1() + factory1, tempCords.cpx2() + factorx2, tempCords.cpy2() + factory2, tempCords.x2, tempCords.y2);
			ctx.fill();
			//ctx.stroke();
			ctx.closePath();		
			arrayofPoints = new Array();
			counter = 0;	
		}
	},
	drawMagicBrush : function(ctx)
	{
		ctx.globalAlpha = 0.5;
		arrayofPoints.push( {x: globalX, y: globalY} );
		//document.getElementById("status").innerHTML = counter + " -- " + arrayofPoints.length;
		counter = counter + 1;
		drawDistance = parseInt(currentDrawStyle.pencilWidth);
		
		if (counter >= 40) {
			
			lastX = arrayofPoints[arrayofPoints.length - 1].x;
			lastY = arrayofPoints[arrayofPoints.length - 1].y;
			
			originX = arrayofPoints[0].x;
			originY = arrayofPoints[0].y;
			
			customMath.getThirdVertex(originX, originY, lastX, lastY, 10);
			document.getElementById("status").innerHTML = "Origin,Last: (" + originX + "," + originY + "," + lastX + "," + lastY + ") -- customMath: (" + customMath.x3.s1 + "," + customMath.y3.s1 + "," + customMath.x3.s2 + "," + customMath.y3.s2 + ")";
			
			ctx.beginPath();
			ctx.lineCap = "round";
			ctx.lineJoin = "round";	
			ctx.lineWidth = 0;
			
			var grd = ctx.createLinearGradient(originX,originY,lastX,lastY);
			grd.addColorStop(0, currentDrawStyle.LineColor);
			grd.addColorStop(1, currentDrawStyle.ShadowColor);
			ctx.fillStyle = grd;	
			this.erasebrush(ctx);
			
			ctx.moveTo(originX, originY);
			ctx.lineTo(lastX, lastY);
			ctx.lineTo(customMath.x3.s1, customMath.y3.s1);
			ctx.lineTo(customMath.x3.s2, customMath.y3.s2);
			ctx.lineTo(lastX, lastY);
			ctx.fill();
			ctx.closePath();
			counter = 0;
			
			ctx.beginPath();
			ctx.lineCap = "round";
			ctx.lineJoin = "round";	
			ctx.lineWidth = 2;
			ctx.fillStyle = "red";
			
			ctx.moveTo(originX, originY);
			ctx.lineTo(lastX, lastY);
			ctx.stroke();
			
			arrayofPoints[0].x = lastX;
			arrayofPoints[0].y = lastY;
		}
	},
	drawBigPixel : function(ctx)
	{	
		bSize = currentDrawStyle.pencilWidth;
		pixelSeparation = currentDrawStyle.pixelSeparation;
	
		ctx.fillStyle = currentDrawStyle.LineColor;
		this.erasebrush(ctx);
		
		customCoordinates.init(bSize, globalX, globalY, pixelSeparation);
		ctx.fillRect(customCoordinates.originX, customCoordinates.originY, bSize, bSize);
	}
}