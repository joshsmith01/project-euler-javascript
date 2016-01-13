/*
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.


 */
(function() {


		function reverse( str ) {
			return str.split( '' ).reverse().join( '' );
		}


		for ( i = 100; i < 1000; i ++ ) {
			for ( j = 100; j < 1000; j ++ ) {
				var product = i * j;
				var num = product.toString();
//				document.getElementById('q-004' ).innerHTML = product;
				if ( num == reverse( num ) ) {
					pal = num;
					document.getElementById( 'q-004' ).innerHTML = pal;
				}
			}
		}

	}
)();