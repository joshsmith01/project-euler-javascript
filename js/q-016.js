/*
 *2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

 What is the sum of the digits of the number 2^1000?
 */
(function() {



		function getPower(base, exponent) {

			answer = Number(Math.pow(base, exponent) );


			console.log( "The type of answer is " + typeof answer );
			console.log( answer );

//			var digits = [];
//			var sNumber = answer.toString();
//			var len = sNumber.length;
//			for( var i = 0; i < len; i++) {
//
//				digits.push(+sNumber.charAt(i));
//			}

			return answer;

		}




		function addThemUp( arr ) {
			var result = 0;
			for(i = 0; i < arr.length; i++) {


				result += arr[i];

			}
			console.log( typeof result);


			return result;
		}



		console.log(addThemUp(getPower(2, 1000)));



}
)();