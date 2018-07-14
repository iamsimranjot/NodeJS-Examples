// Type I

var rect = {
	perimeter: (x,y) => (2(x+y)),
	area: (x,y) => (x*y)
};

// Type II

const rect_exported = require('./rectangle.js')

// Type III

var perimeter = (x,y) =>  (2*(x+y));
var area = (x,y) =>  (x*y);


// ----------------------------------------------------------------------------------------------------------------------------

function solveRect(l,b) {

	console.log("Solving for rectangle with l = " + l + " and b = " + b);
	rect_exported(l, b, (error, rectangle) => {

		if (error) {

			console.log("Error: " + error.message)
		}
		else {

			console.log("Perimeter for Length " + l + " and Breath " + b + " is " + rectangle.perimeter())
			console.log("Area for Length " + l + " and Breath " + b + " is " + rectangle.area())
		}
	});	
}


// ----------------------------------------------------------------------------------------------------------------------------

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

