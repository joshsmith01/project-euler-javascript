/**
 * The sum of the squares of the first ten natural numbers is,
 1^2 + 2^2 + ... + 102 = 385
 The square of the sum of the first ten natural numbers is,
 (1 + 2 + ... + 10)2 = 552 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */


(function() {

		var powSum = 0;

		var sumPow = 0;
		var squareDiff = function ( n ) {

		if ( n <= 100 ) {

			sumPow += Math.pow( n, 2 );

			powSum += n;

			return squareDiff(n+1);

		} else {

			return Math.pow( powSum, 2 ) - sumPow;

		}

	};
		console.log( squareDiff( 1 );
	}


)();