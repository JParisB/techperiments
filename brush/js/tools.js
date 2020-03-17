// JavaScript Document
var colorSet = {
	standard : "#F9EBEA,#F2D7D5,#E6B0AA,#D98880,#CD6155,#C0392B,#A93226,#922B21,#7B241C,#641E16,#FDEDEC,#FADBD8,#F5B7B1,#F1948A,#EC7063,#E74C3C,#CB4335,#B03A2E,#943126,#78281F,#F5EEF8,#EBDEF0,#D7BDE2,#C39BD3,#AF7AC5,#9B59B6,#884EA0,#76448A,#633974,#512E5F,#F4ECF7,#E8DAEF,#D2B4DE,#BB8FCE,#A569BD,#8E44AD,#7D3C98,#6C3483,#5B2C6F,#4A235A,#EAF2F8,#D4E6F1,#A9CCE3,#7FB3D5,#5499C7,#2980B9,#2471A3,#1F618D,#1A5276,#154360,#EBF5FB,#D6EAF8,#AED6F1,#85C1E9,#5DADE2,#3498DB,#2E86C1,#2874A6,#21618C,#1B4F72,#E8F8F5,#D1F2EB,#A3E4D7,#76D7C4,#48C9B0,#1ABC9C,#17A589,#148F77,#117864,#0E6251,#E8F6F3,#D0ECE7,#A2D9CE,#73C6B6,#45B39D,#16A085,#138D75,#117A65,#0E6655,#0B5345,#E9F7EF,#D4EFDF,#A9DFBF,#7DCEA0,#52BE80,#27AE60,#229954,#1E8449,#196F3D,#145A32,#EAFAF1,#D5F5E3,#ABEBC6,#82E0AA,#58D68D,#2ECC71,#28B463,#239B56,#1D8348,#186A3B,#FEF9E7,#FCF3CF,#F9E79F,#F7DC6F,#F4D03F,#F1C40F,#D4AC0D,#B7950B,#9A7D0A,#7D6608,#FEF5E7,#FDEBD0,#FAD7A0,#F8C471,#F5B041,#F39C12,#D68910,#B9770E,#9C640C,#7E5109,#FDF2E9,#FAE5D3,#F5CBA7,#F0B27A,#EB984E,#E67E22,#CA6F1E,#AF601A,#935116,#784212,#FBEEE6,#F6DDCC,#EDBB99,#E59866,#DC7633,#D35400,#BA4A00,#A04000,#873600,#6E2C00,#FDFEFE,#FBFCFC,#F7F9F9,#F4F6F7,#F0F3F4,#ECF0F1,#D0D3D4,#B3B6B7,#979A9A,#7B7D7D,#F8F9F9,#F2F3F4,#E5E7E9,#D7DBDD,#CACFD2,#BDC3C7,#A6ACAF,#909497,#797D7F,#626567,#F4F6F6,#EAEDED,#D5DBDB,#BFC9CA,#AAB7B8,#95A5A6,#839192,#717D7E,#5F6A6A,#4D5656,#F2F4F4,#E5E8E8,#CCD1D1,#B2BABB,#99A3A4,#7F8C8D,#707B7C,#616A6B,#515A5A,#424949,#EBEDEF,#D6DBDF,#AEB6BF,#85929E,#5D6D7E,#34495E,#2E4053,#283747,#212F3C,#1B2631,#EAECEE,#D5D8DC,#ABB2B9,#808B96,#566573,#2C3E50,#273746,#212F3D,#1C2833,#17202A",
	material : "#FFEBEE,#FFCDD2,#EF9A9A,#E57373,#EF5350,#F44336,#E53935,#D32F2F,#C62828,#B71C1C,#FF8A80,#FF5252,#FF1744,#D50000,#FCE4EC,#F8BBD0,#F48FB1,#F06292,#EC407A,#E91E63,#D81B60,#C2185B,#AD1457,#880E4F,#FF80AB,#FF4081,#F50057,#C51162,#F3E5F5,#E1BEE7,#CE93D8,#BA68C8,#AB47BC,#9C27B0,#8E24AA,#7B1FA2,#6A1B9A,#4A148C,#EA80FC,#E040FB,#D500F9,#AA00FF,#EDE7F6,#D1C4E9,#B39DDB,#9575CD,#7E57C2,#673AB7,#5E35B1,#512DA8,#4527A0,#311B92,#B388FF,#7C4DFF,#651FFF,#6200EA,#E8EAF6,#C5CAE9,#9FA8DA,#7986CB,#5C6BC0,#3F51B5,#3949AB,#303F9F,#283593,#1A237E,#8C9EFF,#536DFE,#3D5AFE,#304FFE,#E3F2FD,#BBDEFB,#90CAF9,#64B5F6,#42A5F5,#2196F3,#1E88E5,#1976D2,#1565C0,#0D47A1,#82B1FF,#448AFF,#2979FF,#2962FF,#E1F5FE,#B3E5FC,#81D4FA,#4FC3F7,#29B6F6,#03A9F4,#039BE5,#0288D1,#0277BD,#01579B,#80D8FF,#40C4FF,#00B0FF,#0091EA,#E0F7FA,#B2EBF2,#80DEEA,#4DD0E1,#26C6DA,#00BCD4,#00ACC1,#0097A7,#00838F,#006064,#84FFFF,#18FFFF,#00E5FF,#00B8D4,#E0F2F1,#B2DFDB,#80CBC4,#4DB6AC,#26A69A,#009688,#00897B,#00796B,#00695C,#004D40,#A7FFEB,#64FFDA,#1DE9B6,#00BFA5,#E8F5E9,#C8E6C9,#A5D6A7,#81C784,#66BB6A,#4CAF50,#43A047,#388E3C,#2E7D32,#1B5E20,#B9F6CA,#69F0AE,#00E676,#00C853,#F1F8E9,#DCEDC8,#C5E1A5,#AED581,#9CCC65,#8BC34A,#7CB342,#689F38,#558B2F,#33691E,#CCFF90,#B2FF59,#76FF03,#64DD17,#F9FBE7,#F0F4C3,#E6EE9C,#DCE775,#D4E157,#CDDC39,#C0CA33,#AFB42B,#9E9D24,#827717,#F4FF81,#EEFF41,#C6FF00,#AEEA00,#FFFDE7,#FFF9C4,#FFF59D,#FFF176,#FFEE58,#FFEB3B,#FDD835,#FBC02D,#F9A825,#F57F17,#FFFF8D,#FFFF00,#FFEA00,#FFD600,#FFF8E1,#FFECB3,#FFE082,#FFD54F,#FFCA28,#FFC107,#FFB300,#FFA000,#FF8F00,#FF6F00,#FFE57F,#FFD740,#FFC400,#FFAB00,#FFF3E0,#FFE0B2,#FFCC80,#FFB74D,#FFA726,#FF9800,#FB8C00,#F57C00,#EF6C00,#E65100,#FFD180,#FFAB40,#FF9100,#FF6D00,#FBE9E7,#FFCCBC,#FFAB91,#FF8A65,#FF7043,#FF5722,#F4511E,#E64A19,#D84315,#BF360C,#FF9E80,#FF6E40,#FF3D00,#DD2C00,#EFEBE9,#D7CCC8,#BCAAA4,#A1887F,#8D6E63,#795548,#6D4C41,#5D4037,#4E342E,#3E2723,#FAFAFA,#F5F5F5,#EEEEEE,#E0E0E0,#BDBDBD,#9E9E9E,#757575,#616161,#424242,#212121,#ECEFF1,#CFD8DC,#B0BEC5,#90A4AE,#78909C,#607D8B,#546E7A,#455A64,#37474F,#263238,#FFFFFF",
	c64colors : "#000000,#FFFFFF,#68372B,#70A4B2,#6F3D86,#588D43,#352879,#B8C76F,#6F4F25,#433900,#9A6759,#444444,#6C6C6C,#9AD284,#6C5EB5,#959595"
};

var hexToRGB = {
	R : "0",
	G : "0",
	B : "0",
	cutHex : function(h) {
		return (h.charAt(0)=="#") ? h.substring(1,7):h
	},
	setHex : function(hexvalue) {
		this.R = parseInt((this.cutHex(hexvalue)).substring(0,2),16);
		this.G = parseInt((this.cutHex(hexvalue)).substring(2,4),16);
		this.B = parseInt((this.cutHex(hexvalue)).substring(4,6),16);
	}
}

function globalSetter(target,value) {
	currentDrawStyle[target] = value;
}

function setReferenceColor(target,color,div) {
	document.getElementById("ref" + target).style.backgroundColor = color;
	globalSetter(target,color);
	$( "#" + div ).dialog( "close" );
	// document.getElementById(div).style.display = "none";
}

function getPalette(target,type,div) {
	xsize = 15;
	ysize = 20;
	columns = 9;
	currentColumn = 0;
	
	colors = colorSet[type];
	colorArray = colors.split(",");

	finalTable = "<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"1\">\n";
	for (c in colorArray) {
		cellClosed = false;
		if (currentColumn > columns) {
			finalTable = finalTable + "</tr>\n";
			currentColumn = 0;
			cellClosed = true;
		}
		if (currentColumn == 0) {			
			finalTable = finalTable + "<tr>\n";
		}
		currentColumn = currentColumn + 1;
		finalTable = finalTable + "<td width=\"" + xsize + "\" height=\"" + ysize + "\" bgcolor=\"" + colorArray[c] + "\" onclick=\"setReferenceColor('" + target + "','" + colorArray[c] + "','" + div + "');\">";
		finalTable = finalTable + "</td>\n";
	}
	
	if (!cellClosed) {finalTable = finalTable + "</tr>\n";}
	finalTable = finalTable + "</table>\n";
	
	return finalTable;
}

// General Purpose Functions

function randomColor() {
	values = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	color = "#";
	for (i = 1; i <= 6; i++) {
		index = Math.floor((Math.random() * 16) + 1)
		colorvalue = values[index];
		color = color + colorvalue
	}
	return color;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mydebugger = {
	originX : 0,
	originY : 0,
	lastX : 0,
	lastY : 0,
	angle : 10,
	init : function() {
		c1 = document.getElementById("c1").value;
		c1 = c1.split(",");
	
		this.originX = c1[0];
		this.originY = c1[1];	
		this.lastX = c1[2];
		this.lastY = c1[3];		
	}
}

/*
	Block Size = 5
	A			1				2				3
	N	|0| 1 2 3 4 5 |6| 7 8 9 10 11 |12| 13 14 15 16 17 |18|

	Origins O are 1, 7, 13
	
	M = BlockSize + 1
	Multiplier for this example is 6 (6,12,18)
	
	A = INT(N / M) + 1
	O = M(A - 1) + 1
	
	If I got 15. I need to obtain 13. 15 is in area A = 3
	So O = 6(3 - 1) + 1 ---> (6 * 2) + 1 = 13
	
*/
var customCoordinates = {
	originX : 0,
	originY : 0,
	pixelSeparation : 0,
	init : function(blocksize, NumberX, NumberY, pxSeparation) {
		
		var multiplier;
		var areaX;
		var areaY;
		
		this.pixelSeparation = Math.floor(pxSeparation);
		
		multiplier = Math.floor(blocksize) + this.pixelSeparation;
		
		areaX = Math.floor((NumberX / multiplier)) + 1;
		this.originX = (multiplier * (areaX - 1)) + 1;
		
		areaY = Math.floor((NumberY / multiplier)) + 1;
		this.originY = (multiplier * (areaY - 1)) + 1;
		
		// document.getElementById("status").innerHTML = "blocksize[" + blocksize + "] -- NumberX[" + NumberX + "] -- NumberY[" + NumberY + "] -- multiplier[" + multiplier + "] -- areaX[" + areaX + "] -- originX[" + this.originX + "] -- areaY[" + areaY + "] -- originY[" + this.originY + "]";
	}
}

var customMath = {
	CONST_PI_180 : Math.PI / 180,
    CONST_180_PI : 180 / Math.PI,
	x3 : {s1 : 0, s2 : 0},
	y3 : {s1 : 0, s2 : 0},
	
	getThirdVertex : function(x1, y1, x2, y2, angle) {
		// Points and Angle form a Triangle - rectangle, we have then distances a,b and c from points A (x1,y1) B (x3,y3) and C (x2,y2)
		b = customMath.getDistanceBetweenPoints(x1, y1, x2, y2); // get Distance between points
		a = b * customMath.tand(angle) // get distance of segment a

		if (x2 == x1) {x2 = x2 + 1;} // TO avoid divide by zero
		bSlope = (y2 - y1) / (x2 - x1); // Slope of segmet b
		mydoom = "DistanceB[" + b + "] - DistanceA[" + a + "] - bSlope[" + bSlope + "] y3[" + this.y3.s1 + "]";
		// aSlope = (-1) / bSlope; // Slope of a, because they are perpendicular. I think we dont need this.
	
		tempSegment1 = 4 * ( (Math.pow(y1,2) * Math.pow(bSlope,2)) + (Math.pow(bSlope,2) * Math.pow(a,2)) + Math.pow(a,2) );
		tempSegment2 = 2 * (1 + Math.pow(bSlope,2));

		this.y3.s1 = Math.floor((y1 + (Math.sqrt(tempSegment1) / tempSegment2)));
		this.x3.s1 = x1 - (bSlope * this.y3.s1) + (bSlope * y1);
		// document.getElementById("status").innerHTML = "<br>bSlope[" + bSlope + "] y3[" + this.y3.s1 + "] -- [" + x1 + "] - [" + (bSlope * this.y3.s1) + "] + [" + (bSlope * y1) + "] = " + eval(x1 - (bSlope * this.y3.s1) + (bSlope * y1)); 
		
		this.y3.s2 = Math.floor((y1 - (Math.sqrt(tempSegment1) / tempSegment2)));
		this.x3.s2 = x1 - (this.x3.s1 - x1);
		
		this.x3.s1 = Math.round(this.x3.s1); 
		this.y3.s1 = Math.round(this.y3.s1); 
		this.x3.s2 = Math.round(this.x3.s2); 
		this.y3.s2 = Math.round(this.y3.s2);
	},
	
	getDistanceBetweenPoints : function(x1, y1, x2, y2) {
		a = (x2 - x1) * (x2 - x1);
		b = (y2 - y1) * (y2 - y1);
		mySum = a + b;
		c = Math.sqrt(mySum);
		return c;
	},
	
	sind : function(angle) {
		return Math.sin(angle * this.CONST_PI_180); // radians = degrees * (pi/180)
	},	
	cosd : function(angle) {
		return Math.cos(angle * this.CONST_PI_180); // radians = degrees * (pi/180)
	},		
	tand : function(angle) {
		return Math.tan(angle * this.CONST_PI_180); // radians = degrees * (pi/180)
	},
	sini : function(value) {
		return Math.asin(value) * (this.CONST_180_PI);	// degrees = radians * (180/pi)
	},
	cosi : function(value) {
		return Math.acos(value) * (this.CONST_180_PI);	// degrees = radians * (180/pi)
	},	
	tani : function(value) {
		return Math.atan(value) * (this.CONST_180_PI);	// degrees = radians * (180/pi)
	}
}