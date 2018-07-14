module.exports = (x, y, completion) => {

	if (x <= 0 || y <= 0) {

		setTimeout(() => //  The reason why I'm using the setTimeout is to simulate a delay before the callback comes in from the other side.

			completion(new Error("Rectangle dimensions should be greater than zero:  l = " + x + ",  and b = " + y),
			null),
		 	2000)
	}
	else {

		setTimeout(() =>

			completion(null,
			{
				perimeter: () => (2*(x+y)),
				area: () => (x*y)
			}),
		 	2000)
	}
};
