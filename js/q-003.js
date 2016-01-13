/**
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

(function() {

	function isPrime( n ) {
		for( i = 3; i <= Math.ceil( n / 2); i++) {
			if( n % i == 0 ) {
				return false;
			}
		}
		return true;
	}

//	var num = 13195;
    var num = 600851475143;

	for ( j = 3; j <= Math.floor( num / 2); j = j + 2) {
		// first see if i is a whole number
		if ( num % j == 0 ) {
			var y = num / j;
			if(isPrime(y)) {
				document.getElementById('q-003' ).innerHTML = y;
				break;
			}
		}
	}




})();
