/*
 *The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 *
 */


(function() {
	function isPrime( n ) {
		if ( n === 1 ) return false;
		if ( n < 4 ) return true;
		if ( n % 2 === 0 ) return false;
		if ( n < 9 ) return true;
		if ( n % 3 === 0 ) return false;
		if ( n % 5 === 0 ) return false;
		else {
			var r = Math.floor( Math.sqrt( n ) );
			var f = 5;
			while ( f <= r ) {
				if ( n % f === 0 ) return false;
				if ( n % (f + 2
					) === 0 ) return false;
				f += 6;

			}
		}
		return true;
	}


	function sumOfPrimes(n) {
		var sum = 0;
		for( i = 0; i < n; i++) {
			if(isPrime(i)) {
				sum += i;
			}
		}
		return sum;
	}
		console.log(sumOfPrimes(2000000));


}
)();