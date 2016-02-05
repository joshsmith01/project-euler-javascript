/*
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

 If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


 NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 *
 */
// fivehundredandthirtythree = 25
// onehundredandfifteen = 20
// sixhundredandeightyseven = 24
// onehundredandtwelve = 19
// onehundredandeleven = 19
// onetwothreefourfivesixseveneightnineten = 39
(function() {
		var sum = 0;
		var numArr = [];
		var findIt = 11;


		function splitNum( number ) {
			numArr = number.toString().split( '' ).map( Number );
			return numArr;
		}
		splitNum( findIt );

		for ( i = 1; i<=20; i++) {
			if ( i <= 10 ) {
				// in the tens
				console.log( isTens( i ) );
			} else if ( i >= 11 && i < 20) {
				// less than one hundred
				console.log( isTeen( i ) );
			} else if ( numArr.length === 2 ) {
				// less than one hundred
				console.log( isTeen( numArr ) );
			}
			else if ( numArr.length === 3 ) {
				// it's in the hundreds
				isHundreds( numArr );
			} else {
				sum += 11;
			}
		}

		function isTens( arr ) {
			switch ( arr ) {
				case 0:
					sum += 4;
					break;
				case 1:
					sum += 3;
					break;
				case 2:
					sum += 3;
					break;
				case 3:
					sum += 5;
					break;
				case 4:
					sum += 4;
					break;
				case 5:
					sum += 4;
					break;
				case 6:
					sum += 3;
					break;
				case 7:
					sum += 5;
					break;
				case 8:
					sum += 5;
					break;
				case 9:
					sum += 4;
					break;
				case 10:
					sum += 3;
					break;
			}
			return sum;
		}
// Add some comments

		function isTeen( arr ) {
				switch ( arr ) {
					case 11:
						sum += 6;
						break;
					case 12:
						sum += 6;
						break;
					case 13:
						sum += 8;
						break;
					case 14:
						sum += 8;
						break;
					case 15:
						sum += 7;
						break;
					case 16:
						sum += 7;
						break;
					case 17:
						sum += 10;
						break;
					case 18:
						sum += 8;
						break;
					case 19:
						sum += 8;
						break;
				}
			return sum;
		}

		function isHundreds( arr ) {
			if ( findIt === 1000 ) {
				sum += 11;
			} else {
				switch ( arr[0] ) {
					case 0:
						sum += 0; // hundred and
						break;
					case 1:
						sum += 13;
						break;
					case 2:
						sum += 13;
						break;
					case 3:
						sum += 15;
						break;
					case 4:
						sum += 14;
						break;
					case 5:
						sum += 14;
						break;
					case 6:
						sum += 13;
						break;
					case 7:
						sum += 15;
						break;
					case 8:
						sum += 15;
						break;
					case 9:
						sum += 14;
						break;
				}


				switch ( arr[1] ) {
					case 0:
						sum += 0;
						break;
					case 1:
						sum += 0;
						break;
					case 2:
						sum += 6; // twenty
						break;
					case 3:
						sum += 6; // thirty
						break;
					case 4:
						sum += 5; // forty
						break;
					case 5:
						sum += 5; // fifty
						break;
					case 6:
						sum += 5; // sixty
						break;
					case 7:
						sum += 7; // seventy
						break;
					case 8:
						sum += 6; // eighty
						break;
					case 9:
						sum += 6; // ninety
						break;
				}
				switch ( arr[2] ) {
					case 0:
						sum += 4;
						break;
					case 1:
						sum += 3;
						break;
					case 2:
						sum += 3;
						break;
					case 3:
						sum += 5;
						break;
					case 4:
						sum += 4;
						break;
					case 5:
						sum += 4;
						break;
					case 6:
						sum += 3;
						break;
					case 7:
						sum += 5;
						break;
					case 8:
						sum += 5;
						break;
					case 9:
						sum += 4;
						break;
				}

			}
			return sum;
		}
	}
)();