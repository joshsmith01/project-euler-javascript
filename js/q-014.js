/*
 *The following iterative sequence is defined for the set of positive integers:

 n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.
 */

(function() {
		var starter = 1000000;

		function OddOrEven( starter ) {
			var chain = [];
			var tempChain = [];
			var count = 0;

			for ( i = starter; i > 1; i -- ) {
				var j = i;
//				console.log( 'i is ' + i );
				tempChain[i] = [];
				while ( j > 1 ) {
//					console.log( 'j is ' + j );
					if ( j % 2 === 0 ) { // Then starter is even

						j = j / 2;
						tempChain[i].push( j );


					} else { // The starter is odd

						j = 3 * j + 1;
						tempChain[i].push( j );


					}
				}


				if ( tempChain[i].length > chain.length ) {
					chain = tempChain[i];
					count = i;
				}
			}
			return count + ' ' + chain;


		}

		console.log( OddOrEven( starter ) );

	}
)();