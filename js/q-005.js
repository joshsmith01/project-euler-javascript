/**
 * Created by joshsmith01 on 1/13/16.
 */
/**
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */




(function() {
		var arr = range(11, 20, 1);
		var j = 2520;


		// This is a cool little function that mimicks PHP's range function.
		function range( start, stop, step ) {
			var a = [start], b = start;
			while ( b < stop ) {
				b += step;
				a.push( b );
			}
			return a;
		};
		// This function returns T/F depending on whether the number is in fact divisible by each of the elements of an
		// array.
		function isDivisible( a ) {
			for ( i = 0; i < arr.length; i++ ) {
				if ( (a % arr[i] == 0
					) ) {
					continue;
				} else {
					return false;
				}
				return true;
			}
		}
		// The isDivisible function will continue to be called until all numbers can divide j evenly. Notice that I iterate by 2520 also.
		while( isDivisible(j) == false) {
			j+=2520;
		}
		console.log(j);
		console.log( i );
		document.getElementById('q-005' ).innerHTML = j;

	}
)();