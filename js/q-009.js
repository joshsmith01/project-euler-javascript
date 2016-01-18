/*
  *
  *A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a^2 + b^2 = c^2
 For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
  * */

(function() {

		function powers() {
			var product = 0;


			for ( i = 2; i< 200 ;i++) {
				for ( j = 1; j < i; j++) {

					var a = (i * i) - (j * j);
					var b = 2 * i * j;
					var c = (i * i) + (j * j);
					if ( a + b + c === 1000) {
						product = a * b * c;
					}
				}




			}

			return product;
		}

		console.log( powers() );
}
)();