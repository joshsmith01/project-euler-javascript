/**
 *
 *By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10001st prime number?
 *
 */

(function() {

		var count = 1;
		var max = 10001;
		var x = 3;


		function isPrime( n ) {
			if ( n === 1 ) return false;
			if ( n < 4 ) return true;
			if ( n % 2 === 0) return false;
			if ( n < 9) return true;
			if ( n % 3 === 0) return false;
			if ( n % 5 === 0 ) return false;
			else {
				var r = Math.floor( Math.sqrt(n));
				var f = 5;
				while ( f <= r) {
					if (n % f === 0) return false;
					if ( n % (f + 2) === 0 ) return false;
					f+=6;

				}
			}
			return true;
		}

		while ( count < max ) {


			if ( isPrime( x ) ) {


				count ++;
			}
			x = x + 2;


		}
		console.log( x - 2 );
	}
)();